/// <reference path="typings/tsd.d.ts" />
//索引

var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var BookSchema=new mongoose.Schema({
    isbn:{
        type:Number,
        unique:true  //添加唯一索引
    },
    name:{
        type:String,
        index:true  //普通索引
    }
});