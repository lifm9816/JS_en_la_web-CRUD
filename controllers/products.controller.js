import {productServices} from "../service/product-service.js"

const crearNuevaLinea = (nombre, precio, descripcion, id) =>
{
    const linea = document.createElement("tr");
    const contenido = 
    `<td class="td" data-td>${nombre}</td>
    <td>${precio}</td>
    <td>${descripcion}</td>
    <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_producto.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button" id=${id}>Eliminar</button>
            </li>
        </ul>
    </td>`;
    /*element.innerHTML, es uan propiedad que nos permite leer 
    un dato o asignarlo al contenido de un div o bien, del mismo
    control. Facilita la asignación de valores a controles*/
    linea.innerHTML = contenido;

    const btn = linea.querySelector("button");

    btn.addEventListener("click", () =>
    {
        const id = btn.id;
        productServices.eliminarProducto(id).then(respuesta =>
        { 
        }).catch(err => window.location.href = "/screens/error.html")
    })
    
    return linea;
}

/*Constante con la que se indica en qué parte del código HTML
se va a insertar el código según su data attribute*/
const table = document.querySelector("[data-table]");

productServices.listaProductos().then((data) =>
{
    data.forEach((productos) =>
    {
        const nuevaLinea = crearNuevaLinea(productos.nombre, productos.precio, productos.descripcion, productos.id);
        //Agregar elementos al documento ya existente según la posición indicata por su data attribute
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error"));