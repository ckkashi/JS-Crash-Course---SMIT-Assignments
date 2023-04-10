let arr = [1,2,3,4,5];
console.log(arr);

arr.push(6);
console.log(arr);

arr.push(7);
arr.push(8);
console.log(arr);
console.log(arr.length);

arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);

arr.shift();
console.log(arr);
arr.shift();
arr.shift();
console.log(arr);
console.log(arr.length);

arr.unshift(10);
console.log(arr);
arr.unshift(-3);
arr.unshift(51);
console.log(arr);

arr.forEach(function (val) {
    console.log(val);
})

arr.forEach(function (val,index) {
    console.log(index + " : " +val);
})

odd_in_arr = arr.filter(function (val) {
    return val%2!==0;
})
console.log(odd_in_arr);

even_in_arr = arr.filter(function (val) {
    return val%2===0;
})
console.log(even_in_arr);

sorted_arr = arr.sort(function(firstVal,secondVal) {
    if(firstVal>secondVal){ return 1 ;}
    else{ return -1 ;}
})
console.log(sorted_arr);

let res = arr.reduce(function (prev,curr) {
    return prev + curr ;
},1)
console.log(res);


let arr1 = ["Hello","world","from","git"]
let res1 = arr1.reduce(function (prev,curr) {
    return prev + curr + " " ;
},"")
console.log(res1);