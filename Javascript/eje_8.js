let boton=document.getElementById("resultados");

boton.addEventListener("click",function(){
    let jutsuKaisen=document.getElementById("J");
    let hxh=document.getElementById("H");
    let pokemon=document.getElementById("P");
    let digimon=document.getElementById("D");

    let correctas=0;
    let incorrectas=0;

    if (jutsuKaisen.value == "true"){
        correctas++;
    }else {
        incorrectas++;
    }
     if (hxh.value == "true"){
        correctas++;
    }else {
        incorrectas++;
    }
     if (pokemon.value == "true"){
        correctas++;
    }else {
        incorrectas++;
    }
     if (digimon.value == "true"){
        correctas++;
    }else {
        incorrectas++;
    }

    alert("Respues correctas: " + correctas + " y " + "Incorrectas: " + incorrectas);

})