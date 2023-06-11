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
export type LoginType = 'login' | 'register' | 'changeMobile' | 'forgetPassword' |'bindMobile'