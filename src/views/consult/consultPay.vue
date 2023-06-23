<script setup lang="ts">
import CpNavBar from '@/components/CpNavBar.vue'
import { onMounted, ref } from 'vue'
import { payRequest, payParams } from '@/type/consult'
import { Patient } from '@/type/user'
import { apiGetPay, createConsultOrder, apiPayment } from '@/services/consult'
import { useConsultStore } from '@/stores'
import { apiGetPatien } from '@/services/user'
import { Lazyload, showDialog  } from 'vant';

const store = useConsultStore()
const payInfo = ref<payRequest>()
const userInfo = ref<Patient>()
const agree = ref(false)
const show = ref(false)
const payMethod = ref<0 | 1>()
const loading = ref(false)
const orderId=ref('')//订单id
// 获取预支付信息
const getPayMeg = (params: payParams) => { 
  return apiGetPay({type:store.consult.type,illnessType:store.consult.illnessType})
}
// 获取患者详情
const getUserMsg = (id:string) => { 
 return apiGetPatien(id)
}
onMounted(async () => { 
  const res = await getPayMeg({
    type: store.consult.type,
    illnessType:store.consult.illnessType
  })
  payInfo.value = res?.data
  store.setCoupon(res.data.couponId)
  console.log(1111, res.data);
  const userRes = await getUserMsg(store?.consult?.patientId)
  userInfo.value= userRes.data
  console.log('userRes', userRes.data);
})
const submitNext = async () => { 
  if (!agree.value) { 
    showDialog({
      title: '温馨提示',
      message: '请勾选支付协议',
    })
    return
  }
  loading.value=true
  // 生成订单的请求
  const res = await createConsultOrder(store.consult)
  orderId.value=res.data.id
  loading.value = false
  store.clearData()
  show.value=true
}
const pay = async () => { 
  if (payMethod.value == undefined) { 
    return showDialog({
      title: '温馨提示',
      message: '请选择支付方式',
    })
  }
  const res = await apiPayment({
    paymentMethod: payMethod.value,
    orderId: orderId.value,
    payCallback:'http://localhost:5173/room'
  })
  window.location.href = res.data.payUrl
  
}
</script>

<template>
  <div class="consult-pay-page" v-if="payInfo && userInfo">
    <CpNavBar title="支付" />
    <div class="pay-info">
      <p class="tit">图文问诊 {{ payInfo.payment }} 元</p>
      <img class="img" src="@/assets/avatar-doctor.svg" />
      <p class="desc">
        <span>极速问诊</span>
        <span>自动分配医生</span>
      </p>
    </div>
    <van-cell-group>
      <van-cell title="优惠券" :value = "`-¥${payInfo.couponDeduction}`" />
      <van-cell title="积分抵扣" :value="`-¥${payInfo.pointDeduction}`" />
      <van-cell title="实付款" :value="`¥${payInfo.actualPayment}`" class="pay-price" />
    </van-cell-group>
    <div class="pay-space"></div>
    <van-cell-group>
      <van-cell title="患者信息" :value="`${userInfo.name} | ${userInfo.gender===0?'女':'男'} | ${userInfo.age}岁`"></van-cell>
      <van-cell title="病情描述" :label="store.consult.illnessDesc"></van-cell>
    </van-cell-group>
    <div class="pay-schema">
      <van-checkbox v-model="agree">我已同意
         <span class="text">支付协议</span></van-checkbox>
    </div>
    <van-submit-bar 
      button-type="primary" 
      :price="payInfo.actualPayment*100"
      button-text="立即支付"
      text-align="left" 
       @click="submitNext"
       :loading="loading"
      />
      <!-- 弹出框 -->
  <van-action-sheet
   v-model:show="show"
   title="支付方式"
   >
    <div class="pay-type">
          <p class="amount">￥{{payInfo.actualPayment.toFixed(2)}}</p>
          <van-cell-group>
            <van-cell title="微信支付"  @click="payMethod=0">
              <template #icon><cp-icon name="consult-wechat" /></template>
              <template #extra><van-checkbox name="weixin" :checked="payMethod == 0"/></template>
            </van-cell>
            <van-cell title="支付宝支付" @click="payMethod=1">
              <template #icon><cp-icon name="consult-alipay" /></template>
              <template #extra><van-checkbox name="alipay" :checked="payMethod == 1"/></template>
            </van-cell>
          </van-cell-group>
          <div class="btn">
            <van-button type="primary" @click="pay" round block>立即支付</van-button>
          </div>
        </div>
</van-action-sheet>
  </div>
</template>

<style lang="scss" scoped>
.consult-pay-page {
  padding: 46px 0 50px 0;
}

.pay-info {
  display: flex;
  padding: 15px;
  flex-wrap: wrap;
  align-items: center;

  .tit {
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .img {
    margin-right: 10px;
    width: 38px;
    height: 38px;
    border-radius: 4px;
    overflow: hidden;
  }

  .desc {
    flex: 1;

    >span {
      display: block;
      color: var(--cp-tag);

      &:first-child {
        font-size: 16px;
        color: var(--cp-text2);
      }
    }
  }
}

.pay-price {
  ::v-deep() {
    .vam-cell__title {
      font-size: 16px;
    }

    .van-cell__value {
      font-size: 16px;
      color: var(--cp-price);
    }
  }
}

.pay-space {
  height: 12px;
  background-color: var(--cp-bg);
}

.pay-schema {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    color: var(--cp-primary);
  }
}

::v-deep() {
  .van-submit-bar__button {
    font-weight: normal;
    width: 160px;
  }
}

.pay-type {
  .amount {
    padding: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }

  .btn {
    padding: 15px;
  }

  .van-cell {
    align-items: center;

    .cp-icon {
      margin-right: 10px;
      font-size: 18px;
    }

    .van-checkbox :deep(.van-checkbox__icon) {
      font-size: 16px;
    }
  }
}</style>
