//发布
/// <reference path="typings/tsd.d.ts" />

var client=require('./client.js');

client.publish('testPublish','message from pub.js');