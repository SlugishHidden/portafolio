function suma(){
    var num1, num2, resultado;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    resultado=parseInt(num1)+parseInt(num2);
    document.getElementById("resultado").innerHTML=resultado;
}
function resta(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    resultado=parseInt(num1)-parseInt(num2);
    document.getElementById("resultado").innerHTML=resultado;
}
function multi(){
    var num1, num2, resultado;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    resultado=parseInt(num1)*parseInt(num2);
    document.getElementById("resultado").innerHTML=resultado;
}
function division(){
    var num1, num2, resultado;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    resultado=parseInt(num1)/parseInt(num2);
    document.getElementById("resultado").innerHTML=resultado;
}