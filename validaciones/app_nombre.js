import {validaNombre} from "./validacion_nombre.js"

const input = document.querySelector("[data-nombre]")

input.addEventListener("blur", (input) =>
{
    validaNombre(input.target);
})