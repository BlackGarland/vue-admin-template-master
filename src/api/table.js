import request from '@/utils/request'

// 获取列表
export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

// 删除消息
export function del(params) {
  return request({
    url: '/vue-admin-template/table/del',
    method: 'get',
    params
  })
}
// 提交消息
export function submitMsg(params) {
  return request({
    url: '/vue-admin-template/msg/submit',
    method: 'post',
    params
  })
}
// 回复消息
export function answerMsg(params) {
  return request({
    url: '/vue-admin-template/msg/answerMsg',
    method: 'post',
    params
  })
}
// 获取上级列表
export function getSuperiorList(params) {
  return request({
    url: '/vue-admin-template/msg/answerMsg',
    method: 'post',
    params
  })
}
// 获取信箱详情
export function getMsgDetail(params) {
  return request({
    url: '/vue-admin-template/msg/answerMsg',
    method: 'post',
    params
  })
}
