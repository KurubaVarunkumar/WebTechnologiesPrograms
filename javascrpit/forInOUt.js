arr=[1,2,3,4,5]
for(i=0;i<=arr.length-1;i++)
{
    console.log(arr[i]) //for array items
    console.log(i)  //for index values
}
console.log("==================")
//"for-of" is for iterable objects
arr=[1,2,3]
for( var k of arr)
{
    console.log(k)
}
console.log("==================")
//"for-in" is for non-iterable objects
var fan=
{
  "fanColor":"red",
   "fanPrice":2000
}

    console.log(fan)
    console.log(typeof(fan))
    console.log("==================")
    var fan=
    {
      "fanColor":"red",
       "fanPrice":2000
    }   
for(var k in fan)
{
   console.log(k)
}
var fan=
{
  "fanColor":"red",
   "fanPrice":2000
}
for(var k in fan)
{
    console.log(fan),
    console.log(fan[k]),
   console.log(k.fanColor),
   console.log(k.fanPrice),
}



