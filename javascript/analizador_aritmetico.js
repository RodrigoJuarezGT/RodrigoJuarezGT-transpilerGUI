var expresion_entrada = document.getElementById("textarea_expresion_aritmtica")
var consola = document.getElementById("consola")
var botonanalizar = document.getElementById("icono_boton_analizar")
var array_expresion_entrada = expresion_entrada.value.split("")
var msj_error
var indice = 0

botonanalizar.onclick = function(){

}


function q0(array_entrada){
    switch (array_entrada[indice]) {
        case "-":
            q1(array_entrada[indice++])
            break;
        case !isNaN:
            q2(array_entrada[indice++])
            break;
        default:
            msj_error = "valor no reconocido: "+array_entrada
            break;
    }
}

function q1(array_entrada){
    switch (array_entrada) {
        case "-":
            q1(array_entrada[indice++])
            break;
        case !isNaN:
            q3(array_entrada[indice++])
            break;
        default:
            msj_error = "valor no reconocido: "+array_entrada
            break;
    }
}



function q3(array_entrada){
    switch (array_entrada) {
        case !isNaN:
            q3(array_entrada[indice++])
            break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "^":
            q0(array_entrada[indice++])
            break;
        default:
            msj_error = "valor no reconocido: "+array_entrada
            break;
    }
}
