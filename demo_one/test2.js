//数组去重代码实现？

//方法一 使用ES6中 Set去重
// // function unique (arr) {
// //     return Array.from(new Set(arr))
// // }
// console.log(unique(arr));
//方法二  使用indexOf方法去重
function unique (arr) {
    var array = [];
    for (var i=0; i<arr.length; i++) {
        if (arr.indexOf(arr[i])===-1) {
            array.push(arr[i]);
        }
    }
    return array;
}
var arr=[0,'true',true,15,14,false,'false'];
console.log(unique(arr));