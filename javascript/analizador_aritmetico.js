var expresion_entrada 
var array_expresion_entrada
var consola = document.getElementById("consola")
var botonanalizar = document.getElementById("icono_boton_analizar")
var msj_consola
var indice 
var operaciones = ["+","-","*","/","^"]

var esnumero 

botonanalizar.onclick = function(){
    indice = 0
    expresion_entrada = document.getElementById("textarea_expresion_aritmtica")
    array_expresion_entrada = expresion_entrada.value.split("")

    q0(array_expresion_entrada[indice])

    consola.innerHTML += msj_consola
}


function q0(array_entrada){ //estado inicial

    esnumero =  Number(array_entrada)


    if(array_entrada == undefined){
        msj_consola = "<div style='color: red;'> Expresion no valida: "+array_expresion_entrada.join("") + "</div>"
    }
    else if(array_entrada == "-"){
        q1(array_expresion_entrada[++indice])
    }
    else if(isNaN(esnumero)){
        msj_consola = "<div style='color: red;'> valor no reconocido: "+array_entrada+" en la expresion:+"+array_expresion_entrada.join("")+"</div>"
    }
    else if(!isNaN(esnumero)){
        q3(array_expresion_entrada[++indice])
    }


}

function q1(array_entrada){

    esnumero =  Number(array_entrada)

    if(array_entrada == undefined){
        msj_consola = "<div style='color: red;'> Expresion no valida: "+array_expresion_entrada.join("") + "</div>"
    }
    else if(array_entrada == "-"){
        q1(array_expresion_entrada[++indice])
    }    
    else if(isNaN(esnumero)){
        msj_consola = "<div style='color: red;'> valor no reconocido: "+array_entrada+" en la expresion: "+array_expresion_entrada.join("")+"</div>"
    }
    else if(!isNaN(esnumero)){
        q3(array_expresion_entrada[++indice])
    }

}



function q3(array_entrada){ //estado de aceptacion

    esnumero =  Number(array_entrada)

    if(array_entrada == undefined){
        msj_consola = "<div style='color: #00d700;'> Expresion valida: "+" "+array_expresion_entrada.join("")+"</div>"
    }
    else if(operaciones.some(function(value){return value == array_entrada})){
        q0(array_expresion_entrada[++indice])
    } 
    else if(isNaN(esnumero)){
        msj_consola = "<div style='color: red;'> valor no reconocido: "+array_entrada+" en la expresion: "+array_expresion_entrada.join("")+"</div>"
    }
    else if(!isNaN(esnumero)){
        q3(array_expresion_entrada[++indice])
    }


}
