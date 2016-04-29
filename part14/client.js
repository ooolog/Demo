/// <reference path="typings/tsd.d.ts" />
var redis=require('redis');

var client=redis.createClient(6379,'localhost');

module.exports=client;