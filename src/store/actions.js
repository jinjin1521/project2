import {
  getHome,getSelect
}from "../api"
export default {
  getHome({commit},cb) {
    getHome().then(response => {
      const result = response.data  // {code:0, data: seller}
      if (result.code === 0) {
        const home = result.data
         console.log(home)
        commit("GET_HOME", {home})
        cb&&cb()
      }
    })
  },
  getSelect({commit},cb) {
    getSelect().then(response => {
      const result = response.data
      if (result.code === 0) {
        const select = result.data
        console.log('qqqqqq',select)
        commit("GET_SELECT", {select})
        cb&&cb()
      }
    })
  }
}

