

function solicitarYCambiarNombre () {
    const nombre =prompt ("Cual es tu nombre?");
// uso de la api DOM para cambiar el texto de un elemento
document.getElementaryById("texto-saludo").innerText = "Hola" + nombre;

}

