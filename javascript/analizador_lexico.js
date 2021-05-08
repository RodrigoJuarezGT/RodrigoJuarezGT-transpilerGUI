var codigo_entrada
var array_codigo_entrada
var consola = document.getElementById("consola")
var botonanalizarlexico = document.getElementById("icono_boton_analizar_lexico")
var msj_lexico_consola
var indice_inicial
var codigo_evaluar
var cadena_evaluar

var tipos_de_datos = ["int","float","double","char","string","void"]
var pre_procesador = ["#include","define"]
var cadena = ["\""]
var operadores_aritmeticos = ["+","-","*","/","^"]
var operadores_asignacion = ["+=","-=","*=","/=","^=","="]
var operadores_comparacion = ["==","!=",">","<",">=","<="]
var estructuras_control = ["if","for","switch","while"]
var caracteres_llave = ["{","}","(",")","[","]"]

botonanalizarlexico.onclick = function(){
    indice_inicial = 0
    codigo_entrada = document.getElementById("textarea_expresion_aritmtica")

    for(var i=1; i<= codigo_entrada.value.length; i++){

        var codigo_evaluar = codigo_entrada.value.slice(i-1,i)

        if(codigo_evaluar == " " || codigo_evaluar == '\n'){

            cadena_evaluar = codigo_entrada.value.slice(indice_inicial,i-1)

            if(tipos_de_datos.some(function(value){return value == cadena_evaluar})){
                consola.innerHTML += "<div>Tipo de dato: "+ cadena_evaluar +"<div>"
            }else
            if(operadores_aritmeticos.some(function(value){return value == cadena_evaluar})){
                consola.innerHTML += "<div>Operador Aritmetico: "+ cadena_evaluar +"<div>"
            }else
            if(operadores_asignacion.some(function(value){return value == cadena_evaluar})){
                consola.innerHTML += "<div>Operador de Asignacion: "+ cadena_evaluar +"<div>"
            }else            
            if(operadores_comparacion.some(function(value){return value == cadena_evaluar})){
                consola.innerHTML += "<div>Operador de comparacion: "+ cadena_evaluar +"<div>"
            }else
            if(estructuras_control.some(function(value){return value == cadena_evaluar})){
                consola.innerHTML += "<div>Estrucutra de control: "+ cadena_evaluar +"<div>"
            }else
            if(pre_procesador.some(function(value){return value == cadena_evaluar})){
                consola.innerHTML += "<div>Pre procesador: "+ cadena_evaluar +"<div>"
            }else
            if(caracteres_llave.some(function(value){return value == cadena_evaluar})){
                consola.innerHTML += "<div>Caracter tipo llave: "+ cadena_evaluar +"<div>"
            }


            indice_inicial = i;
            continue

        }

        

    }



}