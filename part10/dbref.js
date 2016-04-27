
/// <reference path="typings/tsd.d.ts" />
//DBRef 功能来实现类似于关系数据库中的连接查询
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var User=mongoose.model('User',{
    username:String
});

var News=mongoose.model('News',{
    title:String,
    author:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
});

var user=new User({
    username:'zhengyong'
});

var news=new News({
    title:'newstitle',
    author:user
});

user.save(function(err){
    if(err) return console.log('err:',err);
    
    news.save(function(err){
        if(err) return console.log('err:',err);
        
        News.findOne().populate('author').exec(function(err,doc){
            if(err) return console.log('err',err);
            
            console.log(doc);
        });
    });
});

