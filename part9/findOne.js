/// <reference path="typings/tsd.d.ts" />

var mongoose=require('mongoose');

require('./model');

var Book=mongoose.model('Book');

Book.findOne({"author":"Green"},function(err,docs){
    if(err){
        console.log('err:',err);
        return;
    }
    
    console.log(docs);
});