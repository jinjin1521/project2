<template>
  <div class="wrapLeftRight">
    <div class="leftTitle">
      <div class="leftList" ref="leftList">
        <ul>
          <li class="active">为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
        </ul>
      </div>
      <div class="rightList" ref="rightList">
        <div class="rightListWrap">
          <div class="firstList li1">
            <a href="#">热门分类</a>
            <ul>
              <li>
                <a href="#">
                  <img src="../../imgs/7.jpg">
                  <p>国产狗粮</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../../imgs/7.jpg">
                  <p>国产狗粮</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../../imgs/7.jpg">
                  <p>国产狗粮</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../../imgs/7.jpg">
                  <p>国产狗粮</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../../imgs/7.jpg">
                  <p>国产狗粮</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="secondList li1">
            <a href="#">热门品牌</a>
            <ul>
              <li>
                <a href="#">
                  <div class="borderD">
                    <img src="../../imgs/7.jpg">
                  </div>
                  <p>麦德氏</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="borderD">
                    <img src="../../imgs/7.jpg">
                  </div>
                  <p>麦德氏</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="borderD">
                    <img src="../../imgs/7.jpg">
                  </div>
                  <p>麦德氏</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="borderD">
                    <img src="../../imgs/7.jpg">
                  </div>
                  <p>麦德氏</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="borderD">
                    <img src="../../imgs/7.jpg">
                  </div>
                  <p>麦德氏</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="borderD">
                    <img src="../../imgs/7.jpg">
                  </div>
                  <p>麦德氏</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="borderD">
                    <img src="../../imgs/7.jpg">
                  </div>
                  <p>麦德氏</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="borderD">
                    <img src="../../imgs/7.jpg">
                  </div>
                  <p>麦德氏</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(()=>{  //页面更新完
        new BScroll(this.$refs.leftList,{click:true,scrollY:true});
        new BScroll(this.$refs.rightList,{click:true,scrollY:true})
      })
    }
  }
</script>
<style>
  /*overflow-y: scroll;
   *.scrollbar-none::-webkit-scrollbar {
    width: 0;
    height: 0;}
  */

  .wrapLeftRight{
    /*margin-top:40px;*/
    width:100%;
    height:80%;
  }
  .leftTitle{
    width:100%;
    height:100%;
    /*background-color: red;*/
    overflow:hidden;
  }
  .leftList{
    width:19%;
    height:600px;
    /*具体看li*/
    margin-right:1%;
    /*background-color: blue;*/
    float:left;
  }
  .rightList{
    width:80%;
    height:600px;
    float:left;
  }
  .rightList .rightListWrap{
    width:100%;
  }
  .leftList ul{
    width:100%;
    /*height:100%;*/
    border-right:3px solid #eee;
  }
  .leftList li{
    height:50px;
    width:100%;
    text-align: center;
    line-height: 50px;
    border-bottom:1px solid #eee;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: 14px;

  }
  /*.leftList li .active2{*/
    /*background: #f3f4f5;*/
    /*color: #ed4044;*/
  /*}*/
  .firstList{
    height:310px;
    width:100%;
    border-bottom:2px solid #eee;
    border-top:4px solid #eee;
    padding:15px 5px 20px;
    box-sizing: border-box;
  }
  .li1>a{
    font-size: 14px;
    display: block;
    width:100%;
    height:19px;
    margin-top:10px;
  }
  .li1 ul{
    width:100%;
    height:100%;
  }
  .firstList ul li{
    float:left;
    width:30%;
    height:50%;
  }
  .li1 ul li>a{
    display: block;
    width:100%;
    height:100%;
  }
  .firstList ul li img{
    width:86px;
    height:86px;
  }
  .li1 ul li p{
    height:20px;
    width:100%;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
  }
  .secondList{
    width:100%;
    padding:15px 5px 20px;
    box-sizing: border-box;
  }
  .secondList ul li{
    float:left;
    width:45%;
    height:45%;
    margin-right:5%;
  }
  .secondList ul li>a{
    display: block;
    width:100%;
    height:100%;
  }
  .secondList ul li img{
    width:80px;
    height:50px;
    display: block;
    margin:29px auto;
  }
  .borderD{
    width:100%;
    height:70%;
    border:2px solid #eee;
  }
</style>
