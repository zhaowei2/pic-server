const express = require('express')
const bodyParser = require('body-parser');
const formidable = require('formidable');
const path = require('path')
const fs = require('fs')
const app = express()

const db=require('./mongodb')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://192.168.1.14:8080');
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
    let filedr = "/upload";
    form.uploadDir = path.join(__dirname + filedr);
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    //处理图片
    form.parse(req, function (err, fields, files) {
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
        data.url = filedr + avatarName;

        db.add(data.url)
        datas.data = data
        res.send(datas);
        return;
    })
})
// 上传图片列表
app.post('/addCollect',(req,res)=>{
  console.log(req.body)
  db.addImgList(req.body)
  res.send({
    code:200,
    msg:'success'
  })
})
app.listen(1000);
console.log('listen 1000')
