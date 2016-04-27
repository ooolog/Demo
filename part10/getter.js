/// <reference path="typings/tsd.d.ts" />

var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var User=mongoose.model('User',{
    blog:{
        type:String,
        get:function(url){
            if(!url) return url;
            
            if(0!==url.indexOf('http://')&&0!==url.indexOf('https://'))
            {
                url="http://"+url;
            }
            return url;
        }
    }
});

var user=new User({
    blog:'chensd.com'
});

user.save(function(err){
    if(err){
        console.log('save error:',err);
    }
    
    console.log('blog url:',user.blog);
});
