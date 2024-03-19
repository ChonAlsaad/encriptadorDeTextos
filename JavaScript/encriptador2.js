import * as limpiarCaja from './funciones';



function encriptarTexto(texto) {
    const llaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat',
    };

    texto = texto.toLowerCase();

    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (llaves.hasOwnProperty(letra)) {
            textoEncriptado += llaves[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    const llavesInverso = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u',
    };

    let textoDesencriptado = '';
    let palabraEncriptada = '';

    for (let i = 0; i < textoEncriptado.length; i++) {
        const caracter = textoEncriptado[i];
        if (caracter === ' ') {
            if (llavesInverso.hasOwnProperty(palabraEncriptada)) {
                textoDesencriptado += llavesInverso[palabraEncriptada];
            } else {
                textoDesencriptado += palabraEncriptada;
            }
            palabraEncriptada = '';
        } else {
            palabraEncriptada += caracter;
            if (i === textoEncriptado.length - 1) {
                if (llavesInverso.hasOwnProperty(palabraEncriptada)) {
                    textoDesencriptado += llavesInverso[palabraEncriptada];
                } else {
                    textoDesencriptado += palabraEncriptada;
                }
            }
        }
    }
    return textoDesencriptado;
}

function encriptar() {
    const textoOriginal = document.getElementById("textoEncriptar").value;
    
    const textoEncriptado = encriptarTexto(textoOriginal);

    const resultadoTexto = document.getElementById("resultadoTexto");
    resultadoTexto.innerText = textoEncriptado;

    const imagenTextos = document.querySelector(".imagenTextos");
    imagenTextos.innerHTML = '';
    limpiarCaja();
}

console.log(encriptar)

function desencriptar() {
    const textoEncriptado = document.getElementById("resultadoTexto").innerText;

    const textoDesencriptado = desencriptarTexto(textoEncriptado);

    const resultadoEncriptado = document.getElementById("resultadoEncriptado");
    resultadoEncriptado.innerText = textoDesencriptado;

    const imagenTextos = document.querySelector(".imagenTextos");
    imagenTextos.innerHTML = '';
}







