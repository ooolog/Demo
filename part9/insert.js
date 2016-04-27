/// <reference path="typings/tsd.d.ts" />
var mongoose=require('mongoose');
require('./model.js');

var Book=mongoose.model('Book');

var book=new Book({
    name:"ZhengYong",
    author:"Men",
    publishTime:new Date()
});

book.save(function(err){
    console.log('save status:',err?'failed':'success')
});
