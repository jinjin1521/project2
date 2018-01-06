<template>
    <div ref="shouyeScroll">
      <header_content/>
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
            <mt-swipe-item><img src="../imgs/27.jpg" alt="23"></mt-swipe-item>
            <mt-swipe-item><img src="../imgs/29.jpg" alt="25"></mt-swipe-item>
            <mt-swipe-item><img src="../imgs/30.jpg" alt="26"></mt-swipe-item>
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
      <smallIcon/>
      <div class="line1"></div>
      <div class="newPeople">
        <a href="#"><img src="../imgs/11.gif" alt=""></a>
      </div>
      <div class="surprise">
        <div class="crazy">
          <img src="../imgs/suprice.png" alt="">
        </div>
        <div class="timeDis">距离下一场</div>
        <div class="time"></div>
        <div class="moreChines">
          <a href="#"><img src="../imgs/54.jpg"></a>
        </div>
      </div>
      <div class="surpriseContent" ref="surpriseContent">
        <ul class="sC">
          <li class="sCItem">
            <a href="#">
              <div class="picture">
                <img src="../imgs/19.jpg">
              </div>
              <div class="price">
                <span>￥</span>
                <span>3.90</span>
              </div>
              <p>省￥35.10</p>
            </a>

          </li>
          <li class="sCItem">
            <a href="#">
              <div class="picture">
                <img src="../imgs/19.jpg">
              </div>
              <div class="price">
                <span>￥</span>
                <span>3.90</span>
              </div>
              <p>省￥35.10</p>
            </a>

          </li>
          <li class="sCItem">
            <a href="#">
              <div class="picture">
                <img src="../imgs/19.jpg">
              </div>
              <div class="price">
                <span>￥</span>
                <span>3.90</span>
              </div>
              <p>省￥35.10</p>
            </a>

          </li>
          <li class="sCItem">
            <a href="#">
              <div class="picture">
                <img src="../imgs/19.jpg">
              </div>
              <div class="price">
                <span>￥</span>
                <span>3.90</span>
              </div>
              <p>省￥35.10</p>
            </a>

          </li>
          <li class="sCItem">
            <a href="#">
              <div class="picture">
                <img src="../imgs/19.jpg">
              </div>
              <div class="price">
                <span>￥</span>
                <span>3.90</span>
              </div>
              <p>省￥35.10</p>
            </a>

          </li>
          <li class="sCItem">
            <a href="#">
              <div class="picture">
                <img src="../imgs/19.jpg">
              </div>
              <div class="price">
                <span>￥</span>
                <span>3.90</span>
              </div>
              <p>省￥35.10</p>
            </a>

          </li>
          <li class="sCItem">
            <a href="#">
              <div class="picture">
                <img src="../imgs/19.jpg">
              </div>
              <div class="price">
                <span>￥</span>
                <span>3.90</span>
              </div>
              <p>省￥35.10</p>
            </a>

          </li>
          <li class="sCItem">
            <a href="#">
              <div class="picture">
                <img src="../imgs/19.jpg">
              </div>
              <div class="price">
                <span>￥</span>
                <span>3.90</span>
              </div>
              <p>省￥35.10</p>
            </a>

          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import header from './header.vue'
  import smallIcon from './mainPage/smallIcon.vue'
  export default {
    mounted(){
      new BScroll(this.$refs.surpriseContent,{click:true,scrollX:true});
//      new BScroll(this.$refs.shouyeScroll,{click:true,scrollY:true});
    },
    components:{smallIcon,'header_content':header}
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
    margin-top:142px;
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
  .line1{
    width:100%;
    height:10px;
    background-color: #eee;
  }
  .newPeople{
    width:100%;
    height:120px;
  }
  .newPeople>a{
    display: block;
  }
  .newPeople img{
    width:100%;
    height:100%;
  }
  .surprise{
    width:100%;
    height:50px;
    line-height: 50px;
  }
  .crazy{
    height:100%;
    width:29%;
    float: left;
  }
  .crazy>img{
    width:100%;
    vertical-align: middle;
  }
  .timeDis{
    width:16%;
    height:100%;
    margin:2px 0 0 10px;
    float:left;
    font-size: 12px;
  }
  .time{
    width:21%;
    height:100%;
    float:left;
  }
  .moreChines{
    height:100%;
    float:right;
    width:30%;
  }
  .moreChines a{
    width:100%;
    height:100%;
    display: block;
  }
  .moreChines img{
    width:50%;
    height:100%;
    float:right;
  }
  .surpriseContent{
    width:100%;
    height:130px;
    overflow:hidden;
  }
  .sC{
    width:240%;
    height:100%;
  }
  .sCItem{
    width:110px;
    height:100%;
    float:left;
  }
  .sCItem a{
    display: block;
    width:80%;
    height:100%;
    margin:0 auto;
    text-align: center;
  }
  .picture{
    width:84.5px;
    height:84.5px;
  }
  .picture img{
    width:100%;
    height:100%;
  }
  .price{
    height:22px;
    width:84.5px;
    text-align: center;
  }
  .price span,.sCItem a p{
    height:19px;
    font-size: 14px;
  }
  .sCItem a p{
    width:84.5px;

  }
</style>
