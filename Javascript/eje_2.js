const num=document.getElementById("num");
const boton=document.getElementById("potenciarAlCubo");

boton.addEventListener('click', () => {
    let valor =Number(num.value);
    let cubo = valor * valor * valor;
    alert('El número elevado al cubo es: ' + cubo);
});