
/// <reference path="typings/tsd.d.ts" />

var client=require('./client.js');
client.set('rd',JSON.stringify({a:1,b:2}));

client.get('rd',function(err,val){
     console.log(val);
});