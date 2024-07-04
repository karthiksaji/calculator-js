function buttonclick(val)
{
    /* to check value is come or not 
    console.log(val)*/
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
console.log("working")
function btnclear(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}