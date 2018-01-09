<template>
    <div class="routerView">
      <div class="back" @click="back"><b><</b></div>
      searchGood...
    </div>
</template>
<script>
  export default {
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  html,body{
    width:100%;
    height:100%;
    overflow:hidden;
  }
  .routerView{
    width:100%;
    height:100%;
    position:absolute;
    top:0px;
    left:0;
    z-index: 1000;
    background-color: white;
  }
  .back{
    width:21px;
    height:21px;
  }
</style>
