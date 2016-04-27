/// <reference path="typings/tsd.d.ts" />

var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var UserSchema=new mongoose.Schema({
        nickname:{
            type:String,
            trim:true
        },
        blog:{
            type:String,
            set:function(url){
                if(!url) return url;
                
                if(0!==url.indexOf('http://')&&0!==url.indexOf('https://')){
                    url='http://'+url;
                }
                return url;
            }
        } 
});

var User=mongoose.model('user',UserSchema);
var user=new User({
    nickname:" zhengyong  ",
    blog:"chensd.com"
});

console.log('user:',user);
