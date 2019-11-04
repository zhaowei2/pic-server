<template>
<div class="main-content">
  <div class="sub-nav">
    <nuxt-link to="/" class="sub-current-active">最新</nuxt-link>
    <nuxt-link to="">最热</nuxt-link>
    <nuxt-link to="">推荐</nuxt-link>
    <nuxt-link to="">专题</nuxt-link>
  </div>
  <div class="post-list">
    <!-- <img src="upload/1572571598146.jpg" alt=""> -->
    <ul class="pins">
      <li :key="index" v-for="(item,index) in imgList">
        <nuxt-link :to="'/'+item._id" class="img">
          <img :src="item.breviary" alt="">
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
  @current-change="handleCurrentChange"
  :page-size="pageSize"
  :total="imgTotal">
</el-pagination>
</div>
  <!-- <nuxt /> -->
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      base_url:'./../static/',
      imgList:[],
      imgTotal:3,
      pageSize:12,
      pageNum:1,
      cagetoryList:{
        index:11,
        sexy:1,
        japan:2,//rib
        tawan:3,//台湾
        pure:4,//清纯
      }
    }
  },
  created(){

  },
  methods:{
    // 获取图片
    getData(){  
      let  cagetory= this.$route.name;
      console.log(cagetory)
      axios.get('http://106.12.26.79:1000/getimg',{
        params:{
          pageSize:this.pageSize,
          pageNum:this.pageNum,
          cagetory:this.cagetoryList[cagetory]
        }
      }).then((res)=>{
        console.log(res.data.data)
        if(res.data.msg=="success"){
          this.imgList = res.data.data.page;
          this.imgTotal = res.data.data.total
        }
      })
    },
    handleCurrentChange(val){
      console.log(val);
      this.pageNum = val;
      this.getData();
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
