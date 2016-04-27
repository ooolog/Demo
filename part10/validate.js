/// <reference path="typings/tsd.d.ts" />
//数据验证
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var OrderSchema=new mongoose.Schema({
    orderno:{
        type:Number,
        required:true, //验证不能为空
        max:10000,  //最大值
        min:10   //最小值
    },
    status:{
        type:String,
        enum:['created','sucess','failed'] //字符串枚举验证
    },
    desc:{
        type:String,
        match:/book/g,  //正则验证 字符串必须包含book
        validate:function(desc){  //自定义验证
            return desc.length>=10;
        }
    }
});

var Order=mongoose.model('Order',OrderSchema);

var order=new Order();
order.orderno=10;
order.status='created';
order.desc='this is book'
order.save(function(err){
    if(err){
        return console.log('save failed:',err);
    }
    
    console.log('save succeed');
});