/// <reference path="typings/tsd.d.ts" />
var mongoose=require('mongoose');
var uri='mongodb://username:password@hostname:port/databasename';
uri='mongodb://localhost/part9';
mongoose.connect(uri);
var BookSchema=new mongoose.Schema({
    name:String,
    author:String,
    publishTime:Date
});

mongoose.model('Book',BookSchema);