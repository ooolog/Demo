//数组排序
var arr = [11, 2, 3, 23, 55, 412];

//console.log(arr.sort()); //按照字符串排序  升序
//console.log(arr.reverse());//降序

//自定义排序方法
function compareAB(a, b) {
    // if (a > b) {
    //     return 1;
    // } else if (a === b) {
    //     return 0;
    // } else if (a < b) {
    //     return -1;
    // }
    return a>b;
}
arr.sort(compareAB);
console.log(arr);