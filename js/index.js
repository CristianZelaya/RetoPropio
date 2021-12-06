let arreglo = [];
const divHtml = document.querySelector('#divHtml'),
      divSuma = document.querySelector('#divSuma'),
      btnEnviar = document.querySelector('#enviar'),
      btnReiniciar = document.querySelector('#reiniciar');

let vuelta = 0,
    suma = 0,
    posicion = 0,
    htmlValores = ""
    htmlSuma = "";

btnEnviar.addEventListener('click', insertarNumero);
btnReiniciar.addEventListener('click', limpiarHTML);

function insertarNumero() {

    while ( vuelta <= 4 ) {

        let numero = document.querySelector('#numero').value;
        
        if ( numero === "" ) return validarNumero();
        btnReiniciar.disabled = false;

        arreglo.push(numero);
        posicion = arreglo.length - 1;
        suma += parseInt(numero);
        document.querySelector('#numero').value = "";
        htmlValores += `<h3>Valor capturado: ${numero} guardado en la posición ${posicion}</h3>`;
        divHtml.innerHTML = htmlValores;
        vuelta ++;
        
    }

    htmlSuma = `<h1>La suma es: ${suma}</h1>`;
    divSuma.innerHTML = htmlSuma;
    btnEnviar.disabled = true;
    document.querySelector('#numero').disabled = true;

}

function validarNumero() {

    const existeAlerta = document.querySelector('.alerta');

    if ( !existeAlerta ) {

        const error = document.createElement('h1');
        error.classList.add('alerta');
        error.textContent = 'Inserte un número';
        divHtml.appendChild(error);

        setTimeout(() => {

            error.remove();
            
        }, 500);
        
    }

}

function limpiarHTML() {

    htmlValores = "",
    vuelta = 0;
    suma = 0;
    arreglo = [];
    divSuma.innerHTML = "";
    divHtml.innerHTML = "";

    btnEnviar.disabled = false;
    btnReiniciar.disabled = true;
    document.querySelector('#numero').disabled = false;

}

/* let vuelta = 0,
    suma = 0,
    posicion = 0,
    htmlValores = "",
    htmlSuma = "";

if (numero === "") {

    return null;
    
}

while ( vuelta <= 4 ) {

    //let numero = parseInt(prompt('Introduce un número', ''));
    arreglo.push(numero);
    posicion = arreglo.length - 1;
    suma += numero;
    
    htmlValores += `<h3>Valor capturado: ${numero} guardado en la posición ${posicion}</h3>`;
    
    divHtml.innerHTML = htmlValores;
    
    vuelta ++;

}

htmlSuma = `<h1>La suma es: ${suma}</h1>`;

divSuma.innerHTML = htmlSuma; */

// arreglo.forEach( (num, idx) => {

//     console.log(`Posición: ${idx} el número -> ${num}`);

// });