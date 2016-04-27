/// <reference path="typings/tsd.d.ts" />

var express=require('express');
var app=express();

// app.get('/',function(req,res){
//     res.send('hello');
// })
var Router=express.Router();
/**
 * http://example.com/post/add
 */
Router.get('/add',function(req,res){
    res.end('Router /add\n');
    
});

Router.get('/list',function(req,res){
    res.end('Router /list\n');
    
});

app.use('/',Router);

app.route('/article')
    .get(function(req,res){
        res.end('route /article get \n');
    })
    .post(function(req,res){
        res.end('route /article post\n')
    });
    
 app.param('newsId',function(req,res,next,newsId){
     req.newsId=newsId;
     next();
 });
 app.get('/news/:newsId',function(req,res){
     res.end('newsId:'+req.newsId);
 })

app.listen(18001,function(){
    console.log('express running on http://localhost:18001');
});


