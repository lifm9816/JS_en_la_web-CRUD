import {productServices} from "../service/product-service.js"

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () =>
{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null)
    {
        window.location.href = "/screens/error.html";
    }
    const nombre = document.querySelector(`[data-tipo="producto"]`);
    const precio = document.querySelector(`[data-tipo="precio"]`);
    const descripcion = document.querySelector("[data-descripcion]");

    try
    {
        const productos = await productServices.detalleProducto(id);
        if(productos.nombre && productos.precio || productos.descripcion)
        {
            nombre.value = productos.nombre;
            precio.value = productos.precio;
            descripcion.value = productos.descripcion;
        }
        else
        {
            throw new error;
        }
    }catch(error)
    {
        window.location.href = "/screens/error.html";
    }
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) =>
{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector(`[data-tipo="producto"]`).value;
    const precio = document.querySelector(`[data-tipo="precio"]`).value;
    const descripcion = document.querySelector(`[data-descripcion]`).value;

    console.log(nombre, " - ", precio, " - ", descripcion);
    
    productServices.actualizarProducto(nombre, precio, descripcion, id).then(() =>
    {
        window.location.href="/screens/edicion_producto_concluida.html";
    });
});