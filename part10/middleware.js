/// <reference path="typings/tsd.d.ts" />
//中间件
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/part10');

var ResellerSchema=new mongoose.Schema({
    address:String
});
//保存后执行
ResellerSchema.post('save',function(next){
    console.log('this is ResellerSchema post save middleware');
    //next();
});

//保存前执行 pre 第二个参数 true 表示next和done并行
ResellerSchema.pre('save',true,function(next,done){
    console.log('this is resellerSchema pre save middleware'); 
    next();
    done();
    
});

var Reseller=mongoose.model('Reseller',ResellerSchema);

var reseller=new Reseller({
    address:'101st,People Read'
});

reseller.save();