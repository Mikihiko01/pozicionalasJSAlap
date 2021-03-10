
function szamolas() {
    
    
    
function osszead(){
    var osszeg=Number(valtA)+Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}
function kivon(){
    var osszeg=Number(valtA)-Number(valtB);
}
function szoroz(){
    var osszeg=Number(valtA)*Number(valtB);   
}
function eloszt(){
    var osszeg=Number(valtA)/Number(valtB);
}

   valtA=document.getElementById("a").value;
   valtB=document.getElementById("b").value;
   valtM=document.getElementById("muv").value;
    if(valtM === "+"){
      osszead();
    }

    if(valtM === "-"){
      kivon();
    }
    if(valtM === "*"){
      szoroz();
    }
    if(valtM === "/"){
       eloszt();
    }
    

}






