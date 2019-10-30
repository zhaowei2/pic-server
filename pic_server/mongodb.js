var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";
 
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
  appGetImg:function(){
   
    return new Promise(function(resolve,reject){
      MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          console.log("数据库已创建!");
          var dbase = db.db("pic");
          var data=dbase.collection("previewImage").find({}).toArray(function(err,docs){
          resolve(docs);
        });
      })
    });
  }
}
module.exports=db