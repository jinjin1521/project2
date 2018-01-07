<template>
    <div class="selectPage">
      <div class="selectHeader">
        <div class="selector1">
          <router-link to="/select/selectNext"><span class="active">分类</span></router-link>
        </div>
        <div class="brand1">
          <router-link to="/select/brand"><span>品牌</span></router-link>
        </div>
        <a class="selectS" href="#">
          <img src="../imgs/search.png" alt="">
        </a>
      </div>
      <div>
        <router-view class="propsList"></router-view>
      </div>
    </div>
</template>
<script>
  export default {}
</script>
<style>
  html,body{
    height:100%;
    width:100%;
    overflow: hidden;
  }
  .selectPage{
    width:100%;
    height:100%;
    /*background-color: green;*/
    position:relative;
  }
  .selectHeader{
    width:100%;
    height:40px;
    box-sizing: border-box;
    padding:0 1%;
    border-bottom:1px solid #eee;
    z-index: 100;
    position:fixed;
    top:0;
    left:0;
    background-color: white;
  }
  .selector1,.brand1{
    width:50%;
    height:100%;
    float:left;
    box-sizing: border-box;
    line-height: 40px;
    font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
    font-size: 14px;
    font-weight: 700;
  }
  .selector1 {
    text-align: right;
    padding-right: 6%;
  }
  .brand1{
    padding-left:6%;
  }
  .selectHeader span{
    width:34px;
    height:38px;
    display: inline-block;
  }
  .active{
    color: #ed4044;
    border-bottom: 2px solid #ed4044;
  }
  .propsList{
    margin-top:40px;
  }
  .selectS{
    display: block;
    width:15px;
    height:15px;
    position:absolute;
    top:13px;
    right:13px;
  }
  .selectS img{
    width:100%;
    height:100%;
  }
</style>
