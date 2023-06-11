const phoneRules = [
    { required: true, message: '请填写手机号' },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
]
const passwordRules = [
    { required: true, message: '请填写密码' },
    { pattern:/^\w{8,24}$/, message: '密码格式不正确' },
]
const codeRules = [
    { required: true, message: '请输入验证码' },
    {pattern:/^\d{6}$/,message:'验证码是6个数字'}
]

export { phoneRules,passwordRules,codeRules}