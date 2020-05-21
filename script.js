function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {

        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 85 * i)

    });
}
const titulo = document.querySelector('.site-title', '.site-subtitle');
typeWrite(titulo);
