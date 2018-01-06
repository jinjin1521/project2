<template>
    <div>
      <div>
        <router-view></router-view>
      </div>
      <ul class="footer">
        <li><router-link to="/main"><img src="../imgs/page1.png" alt="page1"/></router-link>
        </li>
        <li>
          <router-link to="/select"><img src="../imgs/page2.png" alt="page2"/></router-link>
        </li>
        <li>
          <router-link to="/shopcar"><img src="../imgs/page3.png" alt="page3"/></router-link>
        </li>
        <li>
          <router-link to="/myself"><img src="../imgs/page4.png" alt="page4"/></router-link>
        </li>
      </ul>

    </div>
</template>
<script>
  import svgImage from '../svg/svg_image.vue'
  export default {}
</script>
<style>
  /*html,body{*/
    /*width:100%;*/
    /*height:100%;*/
    /*overflow: hidden;*/
  /*}*/
  .footer{
    width:100%;
    height:47px;
    position:fixed;
    bottom:0;
    left:0;
    list-style: none;
    background-color: white;
    z-index:100;
  }
  .footer li{
    width:93px;
    height:100%;
    float:left;
  }

  .footer li a{
    font-size: 12px;
    display: block;
    width:42px;
    height:40px;
    margin:2px auto 0;
  }
  .footer li img{
    display: block;
    width:40px;
  }
</style>
