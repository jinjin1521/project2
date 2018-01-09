<template>
    <div class="selections">
      <div class="headerCartShop1">
        <p class="back3" @click="back3"></p>
        <div class="cartShop1">我的收藏</div>
        <div class="showOrHide1" @click="showOrHide">
          <div class="hideContent1" v-if="isShow">
            .....
          </div>
        </div>
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
      back3(){
        this.$router.back(1)
      },
      showOrHide(){
        this.isShow=!this.isShow
      }
    }
  }
</script>
<style>
  html,body{
    width:100%;
    height:100%;
  }
  .selections{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index: 1000;
    background-color: #fff;
  }
  .headerCartShop1{
    width:100%;
    height:50px;
    border-bottom:2px solid #eee;
    /*background-color: #2e6da4;*/
  }
  .headerCartShop1>p,.headerCartShop1>.showOrHide1{
    float:left;
    width:10%;
    height:80%;
    margin-left:5%;
    margin-top:3%;
    background-image: url("../../imgs/img.png");
    background-position: 74px -20px;
  }
  .headerCartShop1>.cartShop1{
    float:left;
    width:65%;
    height:100%;
    text-align:center;
    line-height: 50px;
    font-size: 18px;
  }
  .headerCartShop1>.showOrHide1{
    margin-right:5%;
    background-position: 37px -20px;
  }
  .hideContent1{
    position:fixed;
    top:50px;
    left:0;
    width:100%;
    height:75px;
    background-color: #1b6d85;
  }
</style>
