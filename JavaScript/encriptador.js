

const textoUsuario = document.querySelector ("#texto-usuario");
const texto_encriptado = document.querySelector ("#texto-encriptado");
const botonEncripta = document.getElementById("encripta");
const botonDesencripta = document.getElementById("desencriptar");

const matrizLlaveEncriptar =[
    ["e", "enter"], // indice 0
    ["i", "imes"],  // indice 1
    ["a", "ai"],  // indice 2
    ["o", "ober"],  // indice 3
    ["u", "ufat"],  // indice 4
];

function botonEncriptar() {
    const texto = encriptar(textoUsuario.value);
    texto_encriptado.value = texto;
    textoUsuario.value = "";
};

function encriptar(textoEncriptado){
    for(let i = 0; i < matrizLlaveEncriptar.length; i++) {
        if(textoEncriptado.includes(matrizLlaveEncriptar[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(
                matrizLlaveEncriptar[i][0],
                matrizLlaveEncriptar[i][1]
            );
        }
    }
    return textoEncriptado
};


/*
function encriptar(stringEncriptado) {
    let matrizLlaveEncriptar = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufato"] ];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizLlaveEncriptar.length; i++) {
        if (stringEncriptado.includes(matrizLlaveEncriptar[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizLlaveEncriptar[i][0], matrizLlaveEncriptar[i][1])
        }
    }
    return stringEncriptado;
}

*/



const matrizLlaveDesencriptar =[
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
];

function botonDesncriptar() {
    const textodos = desencriptar(textoUsuario.value);
    texto_encriptado.value = textodos;
    textoUsuario.value = "";
};

function desencriptar(textoDesencriptado){
    for(let i = 0; i < matrizLlaveDesencriptar.length; i++) {
        if(textoDesencriptado.includes(matrizLlaveDesencriptar[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(
                matrizLlaveDesencriptar[i][0],
                matrizLlaveDesencriptar[i][1]
            );
        }
    }
    return textoDesencriptado
};

function botonCopiar() {
    // Get the text field
    var copyText = document.getElementById("texto-encriptado");
    
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    texto_encriptado.value = "";
};

function mostrarcopiar() {
    document.getElementById("copiar").style.display = "inline-block";
};

function ocultarboton() {
    document.getElementById("copiar").style.display = "none";
};

function ocultar() {
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("frase").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
};

function mostrar() {
    document.getElementById("muñeco").style.display = "inline-block";
    document.getElementById("frase").style.display = "inline-block";
    document.getElementById("mensaje").style.display = "inline-block";
    var botonCopiar = document.getElementById("copiar");
    botonCopiar.hidden = false;
};


document.addEventListener("DOMContentLoaded", function() {
    // mostrarTextArea();
    ocultarboton(); // Ocultar el botón al cargar la página
});


/*
function mostrarExitoEncriptar() {
    document.getElementById("exito-enc").style.display = "inline";
};
*/

function mostrarExitoDesencriptar() {
    document.getElementById("exito-des").style.display = "inline-block";
};

function ocultarTexto() {
    document.getElementById("exito-enc").style.display = "none";
    document.getElementById("exito-des").style.display = "none";
};

function mostrarTextArea() {
    var textArea = document.getElementById("texto-encriptado");
    textArea.hidden = false;
}

function mostrarExitoEncriptar() {
    var exitoEncriptar = document.getElementById("exito-enc");
    exitoEncriptar.hidden = false;
}



textoUsuario.addEventListener("input", function(event) {
    if (textoUsuario.value.trim() !== "") {
        botonEncripta.removeAttribute("disabled");
        botonDesencripta.removeAttribute("disabled");
    }
});
function desabilitarBotones() {
    document.getElementById("encripta").setAttribute("disabled", true);
    document.getElementById("desencriptar").setAttribute("disabled", true);
};



