import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main.vue'
import select from '../components/select.vue'
import shopcar from '../components/shopcar.vue'
import myself from '../components/myself.vue'
import unFound from '../components/unFound.vue'
import selectNext from '../components/select-components/selectNext.vue'
import brand from '../components/select-components/brand.vue'
import changeStation from '../components/mainPage/changeStation.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:main
    },
    {
      path:'/main',
      component:main,
      children:[
        {
          path:'/main/changeStation',
          component:changeStation
        }
      ]
    },
    {
      path:'/select',
      component:select,
      children:[
        {
          path:'/select/',
          component:selectNext
        },
        {
          path:'/select/selectNext',
          component:selectNext
        },
        {
          path:'/select/brand',
          component:brand
        }
      ]
    },
    {
      path:'/shopcar',
      component:shopcar
    },
    {
      path:'/myself',
      component:myself
    },

    {
      path:'*',
      component:unFound
    }
  ]
})
