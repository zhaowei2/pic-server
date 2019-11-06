const express = require('express')
const bodyParser = require('body-parser');
const formidable = require('formidable');
const path = require('path')
const fs = require('fs')
const app = express()

const db=require('./mongodb')
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
// 上传图片
app.post('/addImages',(req,res)=>{
    let datas = {};
    datas.code = '0';
    datas.message = '上传图片成功';
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    let PUBLIC_PATH = './public';
    console.log("PUBLIC_PATH:" + PUBLIC_PATH);
    console.log(__dirname);
    // let filedr = "/upload";
    let filedr = "./../pic/static/upload"
    console.log(__dirname + filedr);
    form.uploadDir = path.join(__dirname + filedr);
    console.log(form.uploadDir)
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    //处理图片
    form.parse(req, function (err, fields, files) {+
        console.log(files.file);
        var filename = files.file.name
        var nameArray = filename.split('.');
        var type = nameArray[nameArray.length - 1];
        var name = '';
        for (var i = 0; i < nameArray.length - 1; i++) {
            name = name + nameArray[i];
        }
        var date = new Date();
        // var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
        //var avatarName = '/' + name + '_' + date.getTime() + '.' + type;
        var avatarName = '/' + date.getTime() + '.' + type;
        console.log(avatarName)
        var newPath = form.uploadDir + avatarName;
        console.log(newPath)
        fs.renameSync(files.file.path, newPath); //重命名
        // res.send({data:"/upload/"+avatarName})
        let data = {};
       
        data.name = avatarName;
        data.url = 'upload' + avatarName;

        db.add(data.url)
        datas.data = data
        res.send(datas);
        return;
    })
})
// 上传图片列表
app.post('/addCollect',(req,res)=>{
  console.log(req.body)
  // db.addImgList(req.body)
  let times = new Date().getTime()
  let src = 'http://106.12.26.79/'+req.boy.breviary;
  let data={...req.body,time:times,hot:0,breviary:src}
  db.addImgList(data)
  res.send({
    code:200,
    msg:'success'
  })
})
// 获取图片
app.get('/getimg',(req,res)=>{
  let pageSize =1;
  let cagetory =1;
  let pageNum  =1;
  if(req.query.pageSize){
    pageSize = req.query.pageSize
  }
  if(req.query.cagetory){
    cagetory = req.query.cagetory
  }
  if(req.query.pageNum){
    pageNum = req.query.pageNum
  }
  db.appGetImg({
    pageSize:pageSize,
    cagetory:cagetory,
    pageNum:pageNum
  }).then((data)=>{
    res.send({
      code:200,
      data:data,
      msg:'success'
    })
  })
})

app.get('/getimgDetial',(req,res)=>{
  db.appGetImgDetail({
    id:req.query.id
  }).then(data=>{
    console.log(data);
    res.send({
      code:200,
      data:data,
      msg:'success'
    })
  })
})
app.listen(1000);
console.log('listen 1000')
