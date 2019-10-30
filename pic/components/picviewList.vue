<template>
<div class="main-content">
  <div class="sub-nav">
    <nuxt-link to="/" class="sub-current-active">最新</nuxt-link>
    <nuxt-link to="">最热</nuxt-link>
    <nuxt-link to="">推荐</nuxt-link>
    <nuxt-link to="">专题</nuxt-link>
  </div>
  <!-- <img src="./../static/images/16c01.jpg" alt=""> -->
  <div class="post-list">
    <ul class="pins">
      <li :key="index" v-for="(item,index) in imgList">
        <nuxt-link :to="'/'+index" class="img">
          <img :src="item.src" alt="">
        </nuxt-link>
        <span class="name">
          {{item.title}}
        </span>
        <span class="time">
          {{item.time}}
        </span>
      </li>
    </ul>
  </div>
  <el-pagination
  background
  layout="prev, pager, next"
  prev-text="上一页"
  next-text="下一页"
  :total="1000">
</el-pagination>
</div>
  <!-- <nuxt /> -->
</template>

<script>
export default {
  data(){
    return {
      imgList:[
        {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
        {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
        {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
        {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
        {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
        {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
        {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
        {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
         {
          src:require('./../static/images/16c01.jpg'),
          title:'爆乳姐妹花魅惑私房 床上缠绵上演拉拉诱惑',
          time:'2019-09-16'
        },
      ]
    }
  },
  methods:{
    getData(){  
      console.log(this.$route.name)
    }
  },
  mounted(){
    this.getData();
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
