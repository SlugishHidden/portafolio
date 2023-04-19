function saludo(){

    var nombre,apaterno,edad;
    nombre = prompt("Escribe tu nombre","Nombre");
    alert("Hola "+nombre);
}

function suma1()
{
    /*parseInt(); parseFloat(); */
    var num1, num2, resultado;
        num1 = parseInt(prompt("Escribe un numero",""));
        num2 = parseInt(prompt("Escribe un numero",""));
        resultado = num1 + num2;
        alert("La suma es "+resultado);
}
function resta1()
{
    /*parseInt(); parseFloat(); */
    var num1, num2, resultado;
        num1 = parseInt(prompt("Escribe un numero",""));
        num2 = parseInt(prompt("Escribe un numero",""));
        resultado = num1 - num2;
        alert("La diferencia es "+resultado);
}
function multi1()
{
    /*parseInt(); parseFloat(); */
    var num1, num2, resultado;
        num1 = parseInt(prompt("Escribe un numero",""));
        num2 = parseInt(prompt("Escribe un numero",""));
        resultado = num1*num2;
        alert("El producto es "+resultado);
}
function division1()
{
    /*parseInt(); parseFloat(); */
    var num1, num2, resultado;
        num1 = parseInt(prompt("Escribe un numero",""));
        num2 = parseInt(prompt("Escribe un numero",""));
        resultado = num1/num2;
        alert("El resultado es "+resultado);
}
function Neg()
{
    /*parseInt(); parseFloat(); */
    var num1, num2, resultado;
        num1 = parseInt(prompt("Escribe un numero",""));
        if((num1)<0)
            alert("Es negativo");
        else
            if((num1>0))
                alert("Es positivo");
}
