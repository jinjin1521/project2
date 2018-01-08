<template>
    <div>
        <div class="smallIcon" style="width: 100%" v-if="home.datas">
          <ul>
            <li v-for="(img,index) in home.datas[1].menus" :key="index" style="width: 20%">
              <a href="#"><img :src="img.image"></a>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['home'])
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
