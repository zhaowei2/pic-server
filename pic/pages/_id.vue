<template>
  <div class="content">
    <div class="current-path">
      当前位置:
      <nuxt-link to="/">妹子图</nuxt-link>》
      <nuxt-link to="/pure">清纯妹子</nuxt-link>》{{title}}
    </div>
    <div class="current-title">
      {{title}}
    </div>
    <div class="current-meta">
      分类：
      <nuxt-link to="/pure">清纯妹子</nuxt-link>》
      发布于 2019-04-22 22:13
    </div>
    <div class="current-image" @click="handleNextPageChange(currentPage)">
      <img :src="imgSrc" alt="">
    </div>
    <div class="current-pagenation">
      <el-pagination
        background
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :current-page="currentPage"
        :total="imgList.length">
      </el-pagination>
    </div>
 
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      imgList:[],
      imgTotal:3,
      imgSrc:'',
      title:'',
      pageSize:1,
      currentPage:1,
      pageNum:1,
      cagetoryList:{
        pure:4
      }
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){  
      let _id = this.$route.params.id;
      console.log(_id)
      axios.get('http://106.12.26.79:1000/getimgDetial',{
        params:{
          id:_id,
        }
      }).then((res)=>{
        if(res.data.msg=="success"){
          if(res.data.data.length>0){
            this.title = res.data.data[0].title
            this.imgList = res.data.data[0].preview;
            this.imgSrc = this.imgList[0]
          }
          
        }
      })
    },
    handleCurrentChange(val){
      console.log(val);
      this.currentPage =val;
      this.imgSrc = this.imgList[val-1];
    },
    handleNextPageChange(val){
      console.log(val);
      if(val === this.imgList.length){
        return false;
      }
      this.currentPage =val+1;
      this.imgSrc = this.imgList[val];
    }
  },
}
</script> 
<style  scoped>
.content .current-path{
    padding: 10px;
    font-size:12px;
    border-bottom: 1px solid #EEE;
}
.content .current-title{
    font-size: 18px;
    font-weight: bold;
    padding-top: 10px;
    padding-left: 10px;
}
.content .current-meta{
    color: #999;
    height: 38px;
    font-size: 13px;
    padding-left: 10px;
    border-bottom: 1px solid #EEE;
    line-height: 38px;
}
.content .current-meta a{
    color: #999;
    font-size: 13px;
}
.current .current-pagenation{
  margin: 20px 0;
}
</style>