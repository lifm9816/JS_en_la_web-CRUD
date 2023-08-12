export function validaNombre(input)
{
    const tipoDeInput = input.dataset.nombre;

    if(input.validity.valid)
    {
        input.parentElement.classList.remove("input-container--invalido");
        input.parentElement.querySelector(".input-menssage-error").innerHTML = "";
    }
    else
    {
        input.parentElement.classList.add("input-container--invalido");
        input.parentElement.querySelector(".input-menssage-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = 
[
    "valueMissing"
];

const mensajesDeError =
{
    nombre:
    {
        valueMissing: "El campo nombre no puede estar vacío"
    }
};

function mostrarMensajeDeError(tipoDeInput, input)
{
    let mensaje = "";
    
    tipoDeErrores.forEach(error =>
    {
        if(input.validity[error])
        {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    
    return mensaje;
}