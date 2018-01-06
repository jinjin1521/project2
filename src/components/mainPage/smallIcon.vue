<template>
    <div>
        <div class="smallIcon" style="width: 100%">
          <ul>
            <li v-for="(img,index) in imgs" :key="index" style="width: 20%">
              <a href="#"><img :src="img"></a>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        imgs:[
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water',
          'https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water'
        ]
      }
    }
  }
</script>
<style>
  .smallIcon{
    height:190px;
  }
  .smallIcon>ul{
    width:100%;
    height:100%;
  }
  .smallIcon>ul>li{
    height:50%;
    float:left;
    text-align: center;
    line-height: 100%;
  }
  .smallIcon>ul>li img{
    width:100%;
    vertical-align: middle;
  }
</style>
