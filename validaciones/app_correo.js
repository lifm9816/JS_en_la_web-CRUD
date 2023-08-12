import {validaCorreo} from "./validacion_correo.js"

const input = document.querySelector("[data-email]");

input.addEventListener("blur", (input) =>
{
    validaCorreo(input.target);
});