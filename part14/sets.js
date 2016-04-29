/// <reference path="typings/tsd.d.ts" />
//redis 集合
var client=require('./client.js');

client.sadd('sets','a');
client.sadd('sets','b');
client.sadd('sets','d');

client.smembers('sets',function(err,v){
    console.log('sets:',v);
});