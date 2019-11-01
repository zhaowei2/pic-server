<template>
<div class="main-content">
  <picviewList />
</div>
  <!-- <nuxt /> -->
</template>
<script>
import picviewList from '~/components/picviewList.vue'
export default {
  data(){
    return {
    }
  },
  components: {
    picviewList
  }
}
</script>

<style>
.sub-nav{
  border-bottom: 1px solid #EEE;
}
.sub-nav a {
    font-family: "SimSun", Arial;
    background-color: #EEE;
    display: inline-block;
    margin: 10px 0 10px 10px;
    padding: 4px 10px;
    line-height: 18px;
    font-size: 13px;
}
.sub-nav a.sub-current-active{
  background-color: #FF88AF;
  color: #fff;
}
.pins {
  padding-bottom: 10px;
  width: 748px;
  overflow: hidden;
}
.pins li{
    background-color: #EEE;
    width: 236px;
    height: 416px;
    margin-top: 10px;
    margin-left: 10px;
    float: left;
}
.pins li .img{
  display: inline-block;
}
.pins li img{
  width: 236px;
  height: 354px;
}
.pins span{
    display: inline-block;
    font-size: 12px;
    height: 26px;
    line-height: 18px;
    width: 226px;
    padding-top: 8px;
    padding-left: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 5px;
}
.pins span.time{
    background: url('data:image/gif;base64,R0lGODlhDAAMAJEDALq6uv///9DQ0P///yH5BAEAAAMALAAAAAAMAAwAAAIXHI5pwu3gRIh0Umcvyzp4fyWQRpblcBYAOw==') no-repeat left 3px;
    padding: 0 10px 0 16px;
    margin-left: 10px;
    margin-top: 3px;
    height: 18px;
    width: auto;
    line-height: 18px;
}
</style>
