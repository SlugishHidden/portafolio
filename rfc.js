function genera(){
    var x=document.getElementById("nombre").value;
    var y=document.getElementById("ap").value;
    var z=document.getElementById("am").value;
    var x1=document.getElementById("anyo").value;
    var y1=document.getElementById("mes").value;
    var z1=document.getElementById("dia").value;
    var conc=y.substring(0,2)+z.substring(0,1)+x.substring(0,1)+x1.substring(2,4)+y1.substring(0,2)+z1;
    var mayusc=conc.toUpperCase();
    document.getElementById("resultado").value=mayusc;
    
}