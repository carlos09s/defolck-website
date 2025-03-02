// Ejemplo básico de JavaScript
document.addEventListener("DOMContentLoaded", function() {
    console.log("La página ha cargado correctamente");

    // Agregar funcionalidad básica (por ejemplo, cambiar el color de fondo)
    const button = document.getElementById("changeColorButton");
    if (button) {
        button.addEventListener("click", function() {
            document.body.style.backgroundColor = "#ffcccb";
        });
    }
});
