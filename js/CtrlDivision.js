"use strict";
var forma=document.getElementById("forma"),
        campos=["a","b"],
        salidas=["salidaA","salidaB","salidaDivision"];
forma.addEventListener("submit",division,false);

function division(){
    var a,b,x,c,d;
    a=document.getElementById("salidaA");
    a.innerHTML="";
    x=document.getElementById("a").value;
    try{
        if(x=="")
            throw "Debe ingresar el campo A";
        if(x<=0)
            throw "EL valor a no puede ser 0";
    }catch(err){
        a.innerHTML=err;
    }
    b=document.getElementById("salidaB");
    b.innerHTML="";
    c=document.getElementById("b").value;
    try{
        if(c=="")
            throw "Debe ingresar el campo B";
        if(c<=0)
            throw "EL valor b no puede ser 0";
    }catch(err){
        b.innerHTML=err;
    }
    d=x/c;
document.getElementById("salidaDivision").innerHTML=d;
}


