/// <reference path="typings/tsd.d.ts" />
//redis 列表
var client=require('./client.js');

//推入列表 rpush 从右边推入 lpush 从左边推入
// client.rpush('testlists','a');
// client.rpush('testlists','b');
// client.rpush('testlists','c');

// client.lpush('testlists',1);

//出栈 rpop lpop
client.lpop('testlists',function(err,v){
    console.log('lpop:',v);
});

client.rpop('testlists',function(err,v){
    console.log('rpop:',v);
});

//从链表去数据
client.lrange('testlists',0,-1,function(err,list){
    console.log('testlists:',list);
});