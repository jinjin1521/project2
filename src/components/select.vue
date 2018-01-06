<template>
    <div class="selectPage">
      <div class="selectHeader">
        <div class="selector1">
          <a href="#"><span class="active">分类</span></a>
        </div>
        <div class="brand1">
          <a href="#"><span>品牌</span></a>
        </div>
      </div>
      <selectNext/>
    </div>
</template>
<script>

  import selectNext from './select-components/selectNext.vue'
  export default {
    components:{selectNext}
  }
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

</style>
