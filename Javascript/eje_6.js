let pizza = document.getElementById("pizza");
let precio = document.getElementById("precio");

pizza.addEventListener("change", () => {

    precio.value = pizza.value;

});