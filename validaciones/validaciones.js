export function valida(input)
{
    const tipoDeInput = input.dataset.tipo;

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
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError =
{
    producto:
    {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    precio:
    {
        valueMissing: "El campo precio no puede estar vacío",
        patternMismatch: "El precio no debe incluir letras ni caracteres especiales"
    }
}

function mostrarMensajeDeError(tipoDeInput, input)
{
    let mensaje = "";
    
    tipoDeErrores.forEach(error =>
    {
        if(input.validity[error])
        {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}