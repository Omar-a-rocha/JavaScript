let boton=document.getElementById("cal")

boton.addEventListener("click", function() {

    let procesador = document.getElementById("P");
    let monitor = document.getElementById("M");
    let disco = document.getElementById("D");

    let valorProcesador = Number(procesador.value);
    let valorMonitor = Number(monitor.value);
    let valorDisco = Number(disco.value);

    let total = valorProcesador + valorMonitor + valorDisco;

    document.getElementById("Calcular").value = "$" + total;
});