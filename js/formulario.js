let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let mensaje = document.querySelector("#mensaje");

let errorNombre = document.querySelector(".mensaje-error-nombre");
let errorEmail = document.querySelector(".mensaje-error-email");
let errorTel = document.querySelector(".mensaje-error-tel");
let errorMensaje = document.querySelector(".mensaje-error-mensaje");

let patronNombre = /^[a-zA-Z ]+$/;
let patronEmail = /^\w+@\w+(\.\w{2,4})+$/;
let patronTel = /(\d){10,}$/;
// let patronMensaje = ;

function validarFormulario() {
   // NOMBRE
   nombre.style.border = "";
   errorNombre.style.display = "none"
   if (nombre.value == "") {
      nombre.style.border = "solid 2px var(--color-error)";
      errorNombre.style.display = "block";
   } else if (!patronNombre.test(nombre.value)) {
      nombre.style.border = "solid 2px var(--color-error)";
      errorNombre.innerHTML = "*no se permiten números ni simbolos.";
      errorNombre.style.display = "block";
   }

   // EMAIL
   email.style.border = "";
   errorEmail.style.display = "none";
   if (email.value == "") {
      email.style.border = "solid 2px var(--color-error)";
      errorEmail.style.display = "block";
   } else if (!patronEmail.test(email.value)) {
      email.style.border = "solid 2px var(--color-error)";
      errorEmail.innerHTML = "*no cumple las condiciones. Ej: kevin@gmail.com";
      errorEmail.style.display = "block";
   }

   // TEL
   tel.style.border = "";
   errorTel.style.display = "none"
   if (tel.value == "") {
      tel.style.border = "solid 2px var(--color-error)";
      errorTel.style.display = "block";
   } else if (!patronTel.test(tel.value)) {
      tel.style.border = "solid 2px var(--color-error)";
      errorTel.innerHTML = "*solo se permiten números. Ej: 2664123123";
      errorTel.style.display = "block";
   }

   // MENSAJE
   mensaje.style.border = "";
   errorMensaje.style.display = "none"
   if (mensaje.value == "") {
      mensaje.style.border = "solid 2px var(--color-error)";
      errorMensaje.style.display = "block";
   }

   return false;
}