/// <reference path="typings/tsd.d.ts" />

var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var BookSchema=new mongoose.Schema({
    name:String,
    isbn:Number
});

//添加静态方法
BookSchema.statics.findByISBN=function(isbn,cb){
    this.findOne({isbn:isbn},function(err,doc){
        cb(err,doc);
    })
};
//添加实列方法
BookSchema.methods.print=function(){
    console.log('Book Information');
    console.log('\tTitle:',this.name);
    console.log('\tISBN:',this.isbn);
}

var Book=mongoose.model('Book',BookSchema);
var book=new Book({
    name:"Mean Web Development",
    isbn:123456
});

book.save(function(err){
    if(err){
       console.log('err:',err); 
    }
    
    Book.findByISBN(book.isbn,function(err,doc){
        if(err){
            console.log('err',err);           
        }
        
        console.log('Book:',doc);
    });
   
    book.print();
});

