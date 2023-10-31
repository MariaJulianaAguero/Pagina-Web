const images = [
    'baa1.png',
    'baa2.png',
    'baa3.png',
    
];

let currentImageIndex = 0;
const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateImage() {
    imageElement.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

updateImage();

/*Formulario*/
function validarFormulario() {
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var mensaje = document.getElementById("mensaje").value;
    let errores = [];
 let campo_error = null;
 
 let frm = document.getElementById("frm");
    
    var mensajeError = "";

    
    if (nombre.length === 0 || nombre.length > 30) {
        mensajeError += "Nombre inválido. Debe tener entre 1 y 30 caracteres.\n";
        document.getElementById("error-nombre").textContent = "Nombre inválido";
    } else {
        document.getElementById("error-nombre").textContent = "";
    }

    
    if (email.length > 0 && !email.includes("@")) {
        mensajeError += "Email inválido. Debe contener un @.\n";
        document.getElementById("error-email").textContent = "Email inválido";
    } else {
        document.getElementById("error-email").textContent = "";
    }

    
    if (edad < 18 || edad >= 100) {
        mensajeError += "Edad inválida. Debe ser mayor o igual a 18 y menor a 100.\n";
        document.getElementById("error-edad").textContent = "Edad inválida";
    } else {
        document.getElementById("error-edad").textContent = "";
    }

    
    if (mensaje.length === 0 || mensaje.length > 200) {
        mensajeError += "Mensaje inválido. Debe tener entre 1 y 200 caracteres.\n";
        document.getElementById("error-mensaje").textContent = "Mensaje inválido";
    } else {
        document.getElementById("error-mensaje").textContent = "";
    }

    
    if (mensajeError !== "") {
        alert("Corrija los siguientes errores:\n" + mensajeError);
        return false;
    }

    
    var datosIngresados = "Nombre: " + nombre + "<br>Email: " + email + "<br>Edad: " + edad + "<br>Mensaje: " + mensaje;
    document.getElementById("datos-ingresados").innerHTML = datosIngresados;
    document.getElementById("formulario").style.display = "none";
    document.getElementById("mensaje-enviado").style.display = "block";

    return false; 
}


