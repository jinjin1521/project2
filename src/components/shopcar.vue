<template>
  <div class="shopcar">
    <div class="headerCartShop">
      <p class="back" @click="back1"></p>
      <div class="cartShop">购物车</div>
      <div class="showOrHide" @click="showOrHide">
        <div class="hideContent" v-if="isShow">
          .....
        </div>
      </div>
    </div>
    <div class="cartShopIcon">
      <div class="cartShopImg">
        <span></span>
      </div>
      <div class="eleSpan">
        <span @click="back2">去逛逛</span>
        <span><router-link to="/shopcar/celections">我的收藏</router-link> </span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      showOrHide(){
        this.isShow=!this.isShow
      },
      back1(){
        this.$router.back('/main')
      },
      back2(){
        this.$router.push('/main')
      }
    }
  }
</script>
<style>
  html,body{
    width:100%;
    height:100%;
  }
  .shopcar{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index: 1000;
    background-color: #fff;
  }
  .headerCartShop{
    width:100%;
    height:50px;
    border-bottom:2px solid #eee;
    /*background-color: #2e6da4;*/
  }
  .headerCartShop>p,.headerCartShop>.showOrHide{
    float:left;
    width:10%;
    height:80%;
    margin-left:5%;
    margin-top:3%;
    background-image: url("../imgs/img.png");
    background-position: 74px -20px;
  }
  .headerCartShop>.cartShop{
    float:left;
    width:65%;
    height:100%;
    text-align:center;
    line-height: 50px;
    font-size: 18px;
  }
  .headerCartShop>.showOrHide{
    margin-right:5%;
    background-position: 37px -20px;
  }
  .hideContent{
    position:fixed;
    top:50px;
    left:0;
    width:100%;
    height:75px;
    background-color: #1b6d85;
  }
  .cartShopIcon{
    width:100%;
    height:300px;
  }
  .cartShopImg{
    width:100%;
    height:170px;
  }
  .cartShopImg>span{
    width:100px;
    height:88px;
    display: block;
    margin:50px auto 20px;
    /*background-color: #5bc0de;*/
    background-image: url("../imgs/img.png");
    background-position: -160px -160px;
  }
  .eleSpan{
    width:223px;
    height:44px;
    margin:0px auto;
  }
  .eleSpan>span{
    width:100px;
    height:40px;
    display: inline-block;
    margin-left:5px;
    border-radius: 10px;
    border:2px solid #666;
    text-align: center;
    line-height: 40px;
  }
</style>
