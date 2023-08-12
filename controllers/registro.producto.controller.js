import {productServices} from "../service/product-service.js"

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) =>
{
    evento.preventDefault();
    const nombre = document.querySelector(`[data-tipo="producto"]`).value;
    const precio = document.querySelector(`[data-tipo="precio"]`).value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productServices.crearProducto(nombre, precio, descripcion).then(() =>
    {
        window.location.href = "/screens/registro_completado_productos.html";
    }).catch(err => window.location.href = "/screens/error.html");
})