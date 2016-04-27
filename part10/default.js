/// <reference path="typings/tsd.d.ts" />

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var UserSchema = new mongoose.Schema({
    nickname: {
        type:String,
        default: 'new user'
    },
    regTime:{
        type:Date,
        default:Date.now,
    }
});

var User=mongoose.model('User',UserSchema);

var user=new User();

console.log('user:',user);