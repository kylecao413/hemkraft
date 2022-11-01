import request from '@/utils/request'

//expose email check request
export const reqCheckEmail = (data) => {
  return request({
    url: "/enter/email",
    method: "post",
    data
  })
}
