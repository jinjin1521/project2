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
import dog from '../components/mainPage/dog.vue'
import searchGood from '../components/mainPage/searchGood.vue'
import celections from '../components/shopcarPage/celections.vue'

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
        },
        {
          path:'/main/dog',
          component:dog
        },
        {
          path:'/main/searchGood',
          component:searchGood
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
      component:shopcar,
      children:[
        {
          path:'/shopcar/celections',
          component:celections
        }
      ]
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
