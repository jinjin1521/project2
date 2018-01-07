<template>
  <div>
    <div class="stationImg">
      <div class="main">
        <p class="ftc c999 ft16 rela">DOG<b class="b-line c000 ft12">▁</b></p>
        <p class="ftc mt20  c666">亲爱的小主</p>
        <p class="ftc c333 ft20">您即将进入<span>狗狗站</span></p>
        <ul class="clearfix ftc change-ul">
          <li type="cat" class="fl pet1 cat">
            <img src="//static.epetbar.com/static_web/wap/src/images/change-cat.png">
            <div class="pet1name">猫猫站</div>
          </li>
          <li type="dog" class="fl pet2 mainpet rela dog">
            <img src="//static.epetbar.com/static_web/wap/src/images/change-dog1.png">
            <div>狗狗站</div>
            <b class="current-line c000 ft12">▁</b>
            <a href="javascript:;" class="cfff ft14 ftc once-into mt15 dib">立即进入</a>
          </li>
          <li type="fish" class="fl pet3 fish">
            <img src="//static.epetbar.com/static_web/wap/src/images/change-fish.png">
            <div class="pet3name">水族站</div>
          </li>
        </ul>
      </div>
    </div>
    <router-link to="/main">
      <div class="close"><img src="../../imgs/close3.png"></div>
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .stationImg {
    z-index: 666;
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
  }
  .close {
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    z-index: 1000;
  }
  .close img {
    width: 23px;
    height: 23px;
  }

  .main {
    width: 100%;
    margin: 30% auto;
  }
  .ftc {
    text-align: center;
  . c999 color: #999;
  }

  .rela {
    position: relative;
  }

  .ft16 {
    font-size: 16px;
  }

  .b-line {
    width: 100%;
    position: absolute;
    bottom: -4px;
    left: 0;
    text-align: center;
  }

  .c000 {
    color: #000;
  }

  .ft12 {
    font-size: 12px
  }

  .ft12 b {
    font-weight: 400;
  }

  .c666 {
    font-size: 16px;
    color: #666;
  }

  .mt20 {
    margin-top: 20px;
  }

  .c333 {
    color: #333;
    font-size: 20px;
    margin-top: 15px
  }

  .change-ul {
    margin-top: 35px;
    min-width: 305px;
    padding-left: 10%;
  }

  li {
    float: left;
  }

  .cat {
    width: 25%;
    text-align: center;
    margin-top: 21%;
  }

  img {
    max-width: 70%;
    vertical-align: middle;
  }

  .pet1name {
    margin-top: 5px;
    font-size: 12px;
    color: #999;
  }

  .dog {
    color: #4e9a36;
    width: 40%;
    margin-top: 14%;
  }

  img {
    max-width: 80%;
    vertical-align: middle;
  }

  div {
    margin-top: 5px;
  }

  .current-line {
    width: 100%;
    position: absolute;
    top: -58px;
    left: 0;
    text-align: center;
  }

  .once-into {
    background: #4e9a36;
    border-radius: 30px;
    padding: 7px 15px;
    margin-top: 30px;
    font-size: 12px;
  }

  .cfff {
    color: #fff;
  }

  .dib {
    display: inline-block;
  }

  .fish {
    width: 25%;
    text-align: center;
    margin-top: 21%;
  }

  img {
    vertical-align: middle;
    max-width: 70%;
  }

  .pet3name {
    margin-top: 5px;
    font-size: 12px;
    color: #999;
  }

</style>
