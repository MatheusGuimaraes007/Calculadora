const resultado = document.querySelector('#resultado');
const resultadoString = resultado.substr


function insert(num) {
    return resultado.innerHTML = resultado.innerHTML + num;
}

function clean() {
    return resultado.innerHTML = "";
}

function back() {
     var resultado = document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    if(resultado) {
        resultado.innerHTML = eval(resultado.innerHTML);
    }
}