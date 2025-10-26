const formulario = document.querySelector("#formulario")
const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const numero = document.querySelector("#numero")
const email = document.querySelector("#correo")
const boton = document.querySelector("#enviar")

function enviarPantalla(event) {
    event.preventDefault()

    console.log("Nombre: " + nombre.value)
    console.log("Apellido: " + apellido.value)
    console.log("Numero: " + numero.value)
    console.log("Correo: " + email.value)

    event.target.reset()
}

formulario.addEventListener("submit", enviarPantalla)

function alternarChat() {
    var ventanaChat = document.getElementById('ventana-chat');
    if (ventanaChat.style.display === 'none' || ventanaChat.style.display === '') {
        ventanaChat.style.display = 'flex';
    } else {
        ventanaChat.style.display = 'none';
    }
}

const menuToggle = document.getElementById('menuToggle');
const menuContent = document.getElementById('menuContent');

function alternarMenu() {
    menuContent.classList.toggle('active');
}

menuToggle.addEventListener('click', alternarMenu);