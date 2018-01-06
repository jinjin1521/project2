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
        <div class="firstList">
          <a href="#">热门分类</a>
          <ul>
            <li>
              <a href="#"><img src="../../imgs/7.jpg"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rightTitle" style="display: none">

    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(()=>{  //页面更新完
        new BScroll(this.$refs.leftList,{click:true,scrollY:true})
      }),
      new BScroll(this.$refs.rightList,{click:true,scrollY:true})
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
    margin-top:40px;
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
    height:100%;
    float:left;
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
  .leftList li .active{
    background: #f3f4f5;
    color: #ed4044;
  }
  .firstList{
    height:318px;
    width:100%;
    border-bottom:1px solid #eee;
    padding:15px 5px 20px;
    box-sizing: border-box;
  }
  .firstList>a{
    font-size: 14px;
  }
  .firstList ul{
    width:200%;
    height:100%;
  }
  .firstList ul li{
    float:left;
  }
  .firstList ul li img{
    width:86px;
    height:86px;
  }
</style>
