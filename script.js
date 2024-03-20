
const textArea = document.querySelector("#textArea");
const mensaje = document.querySelector("#mensaje");


// "e" = "enter"
// "i" = "imes"
// "a" = "ai"
// "o" = "ober"
// "u" = "ufat"

// let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
//console.table(matrizCodigo);

// la variabble con la matriz de encriptacion con cada letra, tiene que estar dentro de una función.
// esta función tiene que tener un parámetro (stringEncriptada)
// el bucle for hace el recorrido por la matriz

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";

    const mensajeNoEncontrado = document.querySelector("#mensajeNoEncontrado");
    mensajeNoEncontrado.style.display = "none";
    
    const munieco = document.querySelector("#munieco");
    munieco.style.display = "none";
}



function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}




// ***************************** DESENCRIPTAR********************


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";

    //const mensajeNoEncontrado = document.querySelector("#mensajeNoEncontrado");
   // mensajeNoEncontrado.style.display = "block";
    
    //const munieco = document.querySelector("#munieco");
    //munieco.style.display = "block";
}



function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


// ***************************** COPIAR ********************

function btnCopiar() {
    const texto = mensaje.value;
    navigator.clipboard.writeText(texto).then(function () {
        alert("Texto copiado al portapapeles: " + texto);
        mensaje.value = "";
        document.getElementById('munieco').style.display = 'block';
        
    }, function () {
        alert("Error al intentar copiar el texto");
    });
}
