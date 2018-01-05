<template>
    <div>
      <div class="carousel">
        <!--<img src="../imgs/22.jpg" alt="22">-->
        <!--<ul>-->
          <!--<li><a href="#"><img src="../imgs/22.jpg" alt="22"></a></li>-->
          <!--<li><a href="#"><img src="../imgs/23.jpg" alt="23"></a></li>-->
          <!--<li><a href="#"><img src="../imgs/25.jpg" alt="25"></a></li>-->
          <!--<li><a href="#"><img src="../imgs/26.jpg" alt="26"></a></li>-->
          <!--<li><a href="#"><img src="../imgs/27.jpg" alt="27"></a></li>-->
          <!--<li><a href="#"><img src="../imgs/29.jpg" alt="28"></a></li>-->
          <mt-swipe :auto="2000">
            <mt-swipe-item><img src="../imgs/23.jpg" alt="23"></mt-swipe-item>
            <mt-swipe-item><img src="../imgs/25.jpg" alt="25"></mt-swipe-item>
            <mt-swipe-item><img src="../imgs/26.jpg" alt="26"></mt-swipe-item>
          </mt-swipe>
        <!--</ul>-->
        <!--<div class="pointC">-->
          <!--<div class="point">-->
            <!--<span></span>-->
            <!--<span></span>-->
            <!--<span></span>-->
            <!--<span></span>-->
            <!--<span></span>-->
            <!--<span></span>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
</template>
<script>
  export default {
//    data(){
//
//    },
//    mounted(){
//      setInterval(() => {
//
//      }, 1000)
//    }
  }
</script>
<style>
  .carousel{
    width:100%;
    height:160px;
    /*overflow:hidden;*/
    /*position:relative;*/
  }
  .carousel img{
    width:100%;
    height:160px;
  }
  /*.carousel>ul>li{*/
    /*width:16.66%;*/
    /*height:100%;*/
    /*float:left;*/
  /*}*/
  /*.carousel>ul>li img{*/
    /*display:block;*/
    /*width:100%;*/
    /*height:100%;*/
  /*}*/
  /*.pointC{*/
    /*height:22px;*/
    /*width:100%;*/
    /*!*background-color: #5e5e5e;*!*/
    /*position:absolute;*/
    /*bottom:0;*/
    /*left:0;*/
  /*}*/
  /*.point{*/
    /*width:140px;*/
    /*height:100%;*/
    /*margin:0 auto;*/
  /*}*/
  /*.pointC span{*/
    /*display: inline-block;*/
    /*width:10px;*/
    /*height:10px;*/
    /*background-color: white;*/
    /*border-radius: 50%;*/
    /*margin-left:10px;*/
  /*}*/
  /*.pointC span:first-child{*/
    /*margin-left:0;*/
  /*}*/
</style>
