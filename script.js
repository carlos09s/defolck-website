document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenido a la página de DEFOLCK");

    // Función simple para cambiar color de fondo
    const changeColorButton = document.getElementById("changeColorButton");
    if (changeColorButton) {
        changeColorButton.addEventListener("click", function() {
            document.body.style.backgroundColor = "#ffcccb";
        });
    }
});
