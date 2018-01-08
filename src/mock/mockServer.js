import Mock from 'mockjs'
import home from './home.json'
import select from './select.json'

console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/api/homepage', {
  code:0,
  data: home
})
Mock.mock('/api/selectpage', {
  code: 0,
  data: select
})

// export default xxx  不需要
