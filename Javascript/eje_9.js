let clave=document.getElementById("C");

clave.addEventListener("blur",function(){

if(clave.value.length <7 || clave.value.length >20){
alert("La contraseña no puede tener menos de 7 caracteres o mas de 20");
};

});
