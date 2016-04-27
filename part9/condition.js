/// <reference path="typings/tsd.d.ts" />

var mongoose=require('mongoose');
require('./model.js');

var Book=mongoose.model('Book');

var cond={
    $and:[
        {"author":"Green"},
        {"name":"ZhengYong"}
    ]
};
Book.find(cond,function(err,docs){
    if(err){
        console.log('err:',err);
        return;
    }
    console.log('result:',docs);
});
