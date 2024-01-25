/*
var fun=function()
{ try{
    var a=10
    var b=0
    console.log(a/b)
}
catch(e)
{
    alert("error")
}
}
fun()
*/
var fun=function()
{
    
    try{
        var str=prompt("Enter your name");
        var con=str.toUpperCase();
       alert(con);
       
    }
    catch(e)
    {
        alert("Error in try block")
    }
    finally
    {
        alert("program ended")
    }
}
fun()