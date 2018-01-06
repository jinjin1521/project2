<template>
    <div>
      <div class="header">
        <span class="showOrHide"></span>
        <img src="../imgs/logo.jpg" alt="logo">
        <div class="headerMiddle">
          <span>狗狗站</span> | <span>重庆</span>
          <a href="#"><img src="" alt=""></a>
          <input type="text" placeholder="搜索商品和品牌">
          <img src="../imgs/mydope.png" alt="mydope">
        </div>
        <div class="ulNav" ref="ulNav" style="width:100%">
            <ul class="headerNav" >
              <li><a href="#">首页</a></li>
              <li><a href="#">服饰城</a></li>
              <li><a href="#">狗狗主粮</a></li>
              <li><a href="#">医疗保健</a></li>
              <li><a href="#">零食玩具</a></li>
              <li><a href="#">日用外出</a></li>
              <li><a href="#">美容香波</a></li>
            </ul>
        </div>
        <!--<div class="line"></div>-->
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll(this.$refs.ulNav,{click:true,scrollX:true})
    }
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
  .header>img{
    width:100%;
    display:block;
    height:55px;
  }
  .headerMiddle{
    width:100%;
    height:41px;
    box-sizing:border-box;
    padding:8px 0;
    /*text-align: center;*/
    font-size: 14px;
    margin:5px 0 5px 15px;
  }
  .headerMiddle>img{
    display:inline-block;
    width:6.6666%;
    height:25px;
    vertical-align: middle;
  }
  .headerMiddle>input{
    background-color: #eee;
    border-radius: 5px;
    width:58%;
    height:25px;
    margin-left:10px;
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
  }
  /*.line{*/
    /*width:100%;*/
    /*height:8px;*/
    /*background-color: white;*/
    /*position:absolute;*/
    /*top:135px;*/
    /*left:0;*/
  /*}*/
</style>
