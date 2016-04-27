/// <reference path="typings/tsd.d.ts" />
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var PersonSchema=new mongoose.Schema({
    fristName:String,
    lastName:String
});
//添加虚拟字段
PersonSchema.virtual('fullName').get(function(){
    return this.fristName+' '+this.lastName;
});
//设置虚拟字段可以被toJSON
PersonSchema.set('toJSON',{getters:true,virtual:true});
var Person=mongoose.model('Person',PersonSchema);

var person=new Person({
    fristName:'Zheng',
    lastName:"Yong"
});

console.log('user fullName:',person.fullName);
console.log('JSON:',JSON.stringify(person));