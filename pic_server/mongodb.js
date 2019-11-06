var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = "mongodb://http://106.12.26.79:27017/runoob";
 
const db={
  add:function(data){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      console.log("数据库已创建!");
      var dbase = db.db("pic");

      dbase.collection("imglist").insertOne({src:data}, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
      });
    
    });
  },
  // 添加图片
  addImgList:function(data){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      console.log("数据库已创建!");
      var dbase = db.db("pic");
      dbase.collection("previewImage").insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
      });
    
    });
  },
  // 获取图片
  appGetImg:function(req){
    return new Promise(function(resolve,reject){
      MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          console.log("数据库获取!");
          var dbase = db.db("pic");
          let pageNum = req.pageNum;
          let pageSize = req.pageSize;
          let limit = parseInt(pageSize);
          let skip =0;
          if(pageNum==1){
            skip=0;
          }else{
            skip = pageNum*pageSize;
          }
          let reqparam={}
          if(!req.cagetory=='11'){
            reqparam={
              type:req.cagetory
            }
          }
          let Coll = dbase.collection("previewImage").find(reqparam);
          Coll.count(function(countErr,countDocs){
            Coll.limit(limit).skip(skip).toArray(function(err,docs){
              resolve({
                total:countDocs,
                page:docs
              });
            })
          })
      })
    });
  },

  // 获取图片详情
  appGetImgDetail:function(req){
    return new Promise(function(resolve,reject){
      MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          console.log("获取图片详情获取!");
          var dbase = db.db("pic");
          console.log(req.id)
          let Coll = dbase.collection("previewImage").find({_id:ObjectID(req.id)}).toArray(function(err,docs){
            console.log('id---------')
            console.log(docs)
            resolve(docs)
          })
      })
    });
  }
}

  
module.exports=db