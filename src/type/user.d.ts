// 用户信息
export type User = {
    token?: string
    id?: string
    account?: string
    mobile?: string
  avatar?: string
    data?:object
}
//login登录register注册changeMobile更换手机号
//forgetPassword找回密码, bindMobile绑定三方登录，区分验证码
export type LoginType = 'login' | 'register' | 'changeMobile' | 'forgetPassword' | 'bindMobile'
export type UserInfo = Omit<User, 'token'> & {
  // 喜欢
 likeNumber: number
  /** 收藏 */
  collectionNumber: number
  /** 积分 */
  score: number
  /** 优惠券 */
  couponNumber: number
  orderInfo: {
    /** 待付款 */
    paidNumber: number
    /** 待发货 */
    receivedNumber: number
    /** 待收货 */
    shippedNumber: number
    /** 已完成 */
    finishedNumber: number
  }
  consultationInfo: [
    {
      id:string,
      name:string ,
      avatar:string ,
      depName:string ,
      positionalTitles:string ,
      hospitalName:string ,
      gradeName:string ,
      orderId:string 
    }
  ]
}
// 患者信息
// 家庭档案-患者信息
export type Patient = {
  /** 患者ID */
  id?: string
  /** 患者名称 */
  name: string
  /** 身份证号 */
  idCard: string
  /** 0不默认  1默认 */
  defaultFlag: 0 | 1
  /** 0 女  1 男 */
  gender: 0 | 1
  /** 性别文字 */
  genderValue?: string
  /** 年龄 */
  age?: number
}

// 家庭档案-患者信息列表
export type PatientList = Patient[]



