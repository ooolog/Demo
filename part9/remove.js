/// <reference path="typings/tsd.d.ts" />

var mongoose=require('mongoose');
require('./model.js');
var Book=mongoose.model('Book');

Book.findOne({"auther":"Greed"},function(err,docs){
    if(err){
        console.log('err:',err);
        return;
    }
    
    if(docs){
        docs.remove();
    }
    
});