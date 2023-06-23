<script setup lang="ts">
import CpNavBar from '@/components/CpNavBar.vue'
import CpRadioBtn from '@/components/CpRadioBtn.vue'
import { EnumConsultationTime } from '@/enums'
import { computed, onMounted, ref } from 'vue'
import { ConsultIllness } from '@/type/consult'
import { apiUpload } from '@/services/consult'
import { showToast } from 'vant';
import { useConsultStore } from '@/stores'
import { useRouter } from 'vue-router'
import { showConfirmDialog } from 'vant';

const timeOptions = [
  { label: '一周内', value: EnumConsultationTime.week },
  { label: '一月内', value: EnumConsultationTime.mounth },
  { label: '半年内', value: EnumConsultationTime.halfYear },
  { label: '半年以上', value: EnumConsultationTime.moreHalfYear },
]
const flagOptions = [
    { label: '就诊过', value: 1 },
    { label: '没就诊过', value: 0 },
]
const form = ref<ConsultIllness>({
  illnessDesc: '',
  illnessTime: 1,
  consultFlag: 1,
})
const router = useRouter()
const store = useConsultStore()

const next = () => { 
  if (!form.value.illnessDesc) { 
    showToast('请输入病情描述');
    return
  }
  store.setIllness(form.value)

  router.push('/user/patient?isChange=1')
}
// 数据回显
onMounted(() => { 
if (!!store.consult.illnessDesc) { 
  showConfirmDialog({
    title: '温馨提示',
    closeOnPopstate:false,
    message:
      '需要回显数据吗？',
  }).then(() => { 
    const { illnessDesc, illnessTime , consultFlag } = store.consult
     form.value.illnessDesc= illnessDesc,
      form.value.illnessTime= illnessTime,
      form.value.consultFlag= consultFlag,
    console.log('确定');
  })
}

})


</script>

<template>
  <div class="consult-illness-page">
     <CpNavBar title="图文问诊"></CpNavBar>
    <!-- 医生提示 -->
    <div class="illness-tip van-hairline--bottom">
      <img class="img" src="@/assets/avatar-doctor.svg" />
      <div class="info">
        <p class="tit">在线医生</p>
        <p class="tip">
          请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助
        </p>
        <p class="safe">
          <cp-icon name="consult-safe" /><span>内容仅医生可见</span>
        </p>
      </div>
    </div>
    <!-- 收集信息 -->
    <div class="illness-form">
      <van-field
        type="textarea" 
        rows="3"
        placeholder="请详细描述您的病情，病情描述不能为空"
        v-model="form.illnessDesc"
      >
      </van-field>
      <div class="item">
        <p>本次患病多久了？</p>
        <CpRadioBtn :options="timeOptions" v-model="form.illnessTime"></CpRadioBtn>
      </div>
      <div class="item">
        <p>此次病情是否去医院就诊过？</p>
        <CpRadioBtn :options="flagOptions" v-model="form.consultFlag"></CpRadioBtn>
      </div>
      <!-- 上传组件 -->

    </div>
  </div>
  <div >
    <van-button
       round 
       type="primary"
       size="large"
       class="nextButton"
       @click="next"
        >下一步</van-button>
  </div>
</template>

<style lang="scss" scoped>

.illness-tip {
  display: flex;
  padding: 15px;

  .img {
    width: 52px;
    height: 52px;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 10px;
  }

  .info {
    flex: 1;
    padding-left: 12px;

    .tit {
      font-size: 16px;
      margin-bottom: 5px;
    }

    .tip {
      padding: 12px;
      background: var(--cp-bg);
      color: var(--cp-text3);
      font-size: 13px;
      margin-bottom: 10px;
    }

    .safe {
      font-size: 10px;
      color: var(--cp-text3);
      display: flex;
      align-items: center;

      .cp-icon {
        font-size: 12px;
        margin-right: 2px;
      }
    }
  }
}

.illness-form {
  padding: 15px;

  .van-field {
    padding: 0;

    &::after {
      border-bottom: none;
    }
  }

  .item {
    >p {
      color: var(--cp-text3);
      padding: 15px 0;
    }
  }
}
.illness-img {
  padding-top: 16px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  .tip {
    font-size: 12px;
    color: var(--cp-tip);
  }
  ::v-deep() {
    .van-uploader {
      &__preview {
        &-delete {
          left: -6px;
          top: -6px;
          border-radius: 50%;
          background-color: var(--cp-primary);
          width: 20px;
          height: 20px;
          &-icon {
            transform: scale(0.9) translate(-22%, 22%);
          }
        }
        &-image {
          border-radius: 8px;
          overflow: hidden;
        }
      }
      &__upload {
        border-radius: 8px;
      }
      &__upload-icon {
        color: var(--cp-text3);
      }
    }
  }
}  
.nextButton {
  position: absolute;
  bottom: 10px;
}

</style>
