//订阅
/// <reference path="typings/tsd.d.ts" />

var client=require('./client.js');
//订阅一个频道
client.subscribe('testPublish');

//监听
client.on('message',function(err,v) {
    console.log('subscribe:',v);
});

