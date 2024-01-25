var arr=[1,2,3,4,5]
console.log(arr)
console.log(typeof(arr))
//
var arr1=[1,'var',true,null]
console.log(arr1)
console.log(typeof(arr1))
arr1[0]=100000
console.log(arr)
arr.push(20);
document.write(arr+" ");
arr.pop();
document.write(arr+" ");
//add element as first element
arr.unshift(10000);
document.write(arr+" ");
//remove element at first element
arr.shift();
document.write(arr+"\n");
// Inbuilt methods in Array
//1. splice()--splice method is a in built method in java scrpit . It is used to remove or replace exsting elements
//in array
arr.splice(1,0,20,20);
//here adding elements 20, 20 from 1 index ,,,,Here 0 mean no deletion. There is no any deletion
document.write(arr+" ");
//below we are deleting elements from 1 index . 2 means we are deleting two values
arr.splice(1,2);
document.write(arr+" ");
//replacing elements
arr.splice(0,5,10,20,30,40,50);
document.write("    "+arr);


