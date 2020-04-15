<template>
    <div>
      <div class="header">
        <div class="wrapLogo">
          <span class="showOrHide" @click="showOrHide"><img src="../imgs/close3.png"></span>
          <img src="../imgs/logo.jpg" alt="logo">
        </div>
        <div class="headerMiddle">
          <div class="routerLink">
            <router-link to="/main/dog">
              <span>狗狗站###</span> | <span>重庆###</span>
            </router-link>
          </div>
          <a href="#"><img src="../imgs/search.png"></a>
          <div class="inputRouter">
            <router-link to="/main/searchGood">
              <input type="text" placeholder="搜索商品和品牌"  disabled>
            </router-link>
          </div>

          <img src="../imgs/mydope.png" alt="mydope">
        </div>
        <div class="ulNav" ref="ulNav" style="width:100%" v-if="home">
            <ul class="headerNav">
              <li v-for="(meun, index) in home.menus" :key="index">
                <a href="###">{{meun.menu_name}}</a>
              </li>
            </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
  export default {
    data(){
      return{
        num:1
      }
    },
    mounted(){
      new BScroll(this.$refs.ulNav,{click:true,scrollX:true});
      this.$store.dispatch('getHome')
    },
    computed:{
      ...mapState(['home'])
    },
    methods:{
      showOrHide(){
        $('.wrapLogo').css('display','none')
        PubSub.publish('close',event.target)
      }
    },
//    watch:{
//
//    }
  }
</script>
<style>
  .header{
    width:100%;
    background-color: white;
    position:fixed;
    top:0;
    left:0;
    z-index:100;
  }
  .wrapLogo{
    position:relative;
  }
  .wrapLogo>img{
    width:100%;
    display:block;
    height:55px;
  }
  .showOrHide{
    position:absolute;
    top:5px;
    left:5px;
  }
  .showOrHide>img{
    width:18px;
    height:18px;

  }
  .headerMiddle{
    width:100%;
    height:41px;
    box-sizing:border-box;
    padding:8px 0;
    /*text-align: center;*/
    font-size: 14px;
    margin:5px 0 5px 15px;
    position:relative;
  }
  .routerLink{
    display: inline-block;
  }
  .headerMiddle>img{
    display:inline-block;
    width:6.6666%;
    height:25px;
    vertical-align: middle;
  }
  .headerMiddle .inputRouter{
    display: inline-block;
    width:58%;
    height:25px;
    margin-left:10px;
  }
  .headerMiddle input{
    background-color: #eee;
    border-radius: 5px;
    width:100%;
  }
  .headerMiddle>a{
    display: block;
    position:absolute;
    top:14px;
    right:70px;
  }
  .headerMiddle>a>img{
    width:11px;
    height:11px;
  }
  .ulNav{
    width:100%;
    height:36px;
    /*overflow-x:auto;*/
    /*overflow-y: hidden;*/
    /*position:relative;*/
  }
  .headerNav{
    width:525px;
    height:36px;
  }
  .headerNav li{
    float:left;
    width:74px;
    height: 36px;
    text-align:center;
    line-height:36px;
  }
  .headerNav li a{
    font-size:14px;
    color:#666;
    display:block;
  }
  /*.routerView{*/
    /*width:100%;*/
    /*height:200%;*/
    /*position:absolute;*/
    /*top:0px;*/
    /*left:0;*/
    /*z-index: 1000;*/
    /*background-color: white;*/
  /*}*/
  /*.line{*/
    /*width:100%;*/
    /*height:8px;*/
    /*background-color: white;*/
    /*position:absolute;*/
    /*top:135px;*/
    /*left:0;*/
  /*}*/
</style>
