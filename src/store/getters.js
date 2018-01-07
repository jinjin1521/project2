export default {
  LunboImg (state) {
     console.log('cartFoods()',state.home.datas[0].value)
    if (state.home.datas){
      return state.home.datas[0].value
    }
  }
}
