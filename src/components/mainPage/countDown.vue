<template>
    <div>
      <span>{{content}}</span>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        content:'00:00:00'
      }
    },
    props:["endTime"],
    mounted(){
      this.countdowm(this.endTime)
    },
    methods:{
      countdowm(timestamp){
        console.log('000000012')
        let timer = setInterval(() => {
          let nowTime = new Date();
          let endTime = new Date(timestamp * 1000);
          let t = endTime.getTime() - nowTime.getTime();
          if (t > 0) {
            let hour = Math.floor((t / 3600000) % 24);
            let min = Math.floor((t / 60000) % 60);
            let sec = Math.floor((t / 1000) % 60);
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
            let format = '';
            if (hour > 0) {
              format = `${hour}:${min}:${sec}`;
            }
            if (hour <= 0) {
              format = `00:${min}:${sec}`;
            }
            this.content = format;
          } else {
            clearInterval(timer);
          }
        }, 1000);
      }
    }
  }
</script>
<style>

</style>
