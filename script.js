
const birthdayText = document.getElementById("neon-text green");
const wishesText = document.getElementById("wishesText");

birthdayText.addEventListener("mouseover", function() {
    birthdayText.style.color = "yellow"; 
});

birthdayText.addEventListener("mouseout", function() {
    birthdayText.style.color = "limegreen"; // Vuelve al color verde al quitar el mouse
});

wishesText.addEventListener("mouseover", function() {
    wishesText.style.color = "pink"; 
});

wishesText.addEventListener("mouseout", function() {
    wishesText.style.color = "fuchsia"; // Vuelve al color fucsia al quitar el mouse
});
