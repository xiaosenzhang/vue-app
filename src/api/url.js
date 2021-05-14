/**
 * 配置所有接口路径
 */
const tt = localStorage.getItem('holoview-config')
let url
if (tt) {
  url = JSON.parse(tt).baseUrl
} else {
  url = 'https://demo.holoview-lab.com'
}

module.exports = {
  taskList: `${url}/v1/tenantra/task/list`,
  session: `${url}/v1/tenantra/session`,
  status: `${url}/v1/tenantra/task/status`,
  task: `${url}/v1/tenantra/task`,
  members: `${url}/v1/tenantra/task/members`,
  list: `${url}/v1/tenantra/expert/list`,
}