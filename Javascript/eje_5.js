const contraseña=document.getElementById("contraseña");
const repeticionDeLaContraseña=document.getElementById("repeticionDeLaContraseña");
const comparar=document.getElementById("comparar");

comparar.addEventListener("click", () => {
    if(contraseña.value == repeticionDeLaContraseña.value){
        alert("Verificacion exitosa");
    }else{
        alert("Una de las contraseña ingresadas no es igual a la otra");
    } 
});