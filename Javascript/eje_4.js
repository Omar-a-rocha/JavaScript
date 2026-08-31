const nom=document.getElementById("nom");
const ape=document.getElementById("ape");
const botom=document.getElementById("unir");

botom.addEventListener("click",()=>{
    alert("El nombre completo es: " +nom.value+" "+ape.value )
});