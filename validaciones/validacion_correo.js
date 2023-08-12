export function validaCorreo(input)
{
    const tipoDeInput = input.dataset.email;

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

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch"
]

const mensajesDeError = {
    email:
    {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El correo no es válido"
    }
}

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