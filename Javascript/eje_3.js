const n1=document.getElementById("n1");
const n2=document.getElementById("n2");
const boton=document.getElementById("numMay");

boton.addEventListener("click",() =>{
    let valor1=Number(n1.value);
    let valor2=Number(n2.value);
    if (valor1 > valor2){
        alert("El numero mayor luego de comparar ambos es: " + valor1)
    }
    else
        alert("El numero mayor luego de comparar ambos es: " + valor2)
});