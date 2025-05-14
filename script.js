let numero = 10

function mais() {

    numero = numero + 3
    mostrar()
}

function mostrar() {
    document.querySelectorAll("p")[0].innerText = numero
    document.querySelectorAll("p")[1].innerText = numero
}

mostrar()