
var arr=[22,4,5,111,556,12,100];
console.log(arr);
//所有值都大于19才返回true否则返回false
var e=arr.every(function(m){
   return m>19; 
});
console.log('every,m>19',e)
//只要有值大于10（m>10）就返回true
var e=arr.some(function(m){
   return m>10; 
});
console.log('some,m>10',e)
//返回大于10的值
var e=arr.filter(function(m){
   return m>10; 
});
console.log('filter,m>10',e)
//把所有值+10返回
var e=arr.map(function(m){
   return m+10; 
});
console.log('map,m+10',e)


var arr1=[1,2,11,2,11,15];
var r=arr1.reduce(function(prev,cur,index,arr){
    console.log('prev, cur, index, arr: ',prev,cur,index,arr);
});