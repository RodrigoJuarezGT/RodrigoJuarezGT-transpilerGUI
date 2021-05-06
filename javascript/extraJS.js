var lenguajeentrada = document.getElementById("inputLang")
var lenguajesalida = document.getElementById("outputLang")
var logocodigoentrada = document.getElementById("logo_codigo_entrada")
var logocodigosalida = document.getElementById("logo_codigo_salida")

var logo_c = "<i class='fab fa-cuttlefish'></i>"
var logo_cs = "<i class='fab fa-cuttlefish'></i><i class='fas fa-hashtag' style='font-size: 25px;'></i>"
var logo_php = "<i class='fab fa-php'></i>"
var logo_python = "<i class='fab fa-python'></i>"
var logo_JS = "<i class='fab fa-js-square'></i>"
var logo_prolog = "<i class='fab fa-earlybirds'></i>"


lenguajeentrada.onchange = function(){
    var valor = this.value
    var lensalida
        switch (valor) {
            case "C":
                logocodigoentrada.innerHTML = logo_c
                logocodigosalida.innerHTML = logo_cs
                lensalida = "C#"
                break;
            case "C#":
                logocodigoentrada.innerHTML = logo_cs
                logocodigosalida.innerHTML = logo_c
                lensalida = "C"
                break;  
            case "PHP":
                logocodigoentrada.innerHTML = logo_php
                logocodigosalida.innerHTML = logo_python
                lensalida = "Python"
                break;       
            case "Python":
                logocodigoentrada.innerHTML = logo_python
                logocodigosalida.innerHTML = logo_php
                lensalida = "PHP"
                break;
            case "JavaScript":
                logocodigoentrada.innerHTML = logo_JS
                logocodigosalida.innerHTML = logo_prolog
                lensalida = "Prolog"
                break;
            case "Prolog":
                logocodigoentrada.innerHTML = logo_prolog
                logocodigosalida.innerHTML = logo_JS
                lensalida = "JavaScript"
                break;
        
            default:                
                lensalida = ""
                break;
        }
        lenguajesalida.value = lensalida


}

//manejo de la navegacion

var opcionestraductor = document.getElementById("opciones_menu_traductor")
var opcionesaritmetico = document.getElementById("opciones_menu_analizador_aritmetico")
var opcioneslexico = document.getElementById("opciones_menu_analizador_lexico")
var opcionesinfo = document.getElementById("opciones_menu_informacion")
var opcionesmenus = [opcionestraductor, opcionesaritmetico, opcioneslexico,opcionesinfo]

function hide_opciones_menus(){
    opcionesmenus.forEach(esconder_menus)
    function esconder_menus(element){
        element.style.display = "none";
    }
}


var areabotoninterprete = document.getElementById("boton_menu_traductor")
var areabotonaritmetico = document.getElementById("boton_menu_expresiones")
var areabotonlexico = document.getElementById("boton_menu_analizador")
var areabotoninfo = document.getElementById("boton_menu_about")
var areasbotones = [areabotoninterprete,areabotonaritmetico,areabotonlexico,areabotoninfo]

function unstyle_area_buttons(){
    areasbotones.forEach(quitarestilo)
    function quitarestilo(element){
        element.style.border = "none";
    }
}

var botoninterprete = document.getElementById("boton_interprete")
var botonaritmetico = document.getElementById("boton_an_aritmetico")
var botonlexico = document.getElementById("boton_an_lexico")
var botoninfo = document.getElementById("boton_info")
var botones = [botoninterprete,botonaritmetico,botonlexico,botoninfo];

function unstyle_buttons(){
    botones.forEach(quitarestilo)
    function quitarestilo(element){
        element.style.color = "rgb(140, 140, 140)";
    }
}

botoninterprete.onclick = function(){
    hide_opciones_menus()
    unstyle_area_buttons()
    unstyle_buttons()
    this.style.color = "white";
    areabotoninterprete.style.borderBottom = "2px solid white"
    opcionestraductor.style.display = "flex"
}

botonaritmetico.onclick = function(){
    hide_opciones_menus()
    unstyle_area_buttons()
    unstyle_buttons()
    this.style.color = "white";
    areabotonaritmetico.style.borderBottom = "2px solid white"
    opcionesaritmetico.style.display = "flex"
}

botonlexico.onclick = function(){
    hide_opciones_menus()
    unstyle_area_buttons()
    unstyle_buttons()
    this.style.color = "white";
    areabotonlexico.style.borderBottom = "2px solid white"
    opcioneslexico.style.display = "flex"
}

botoninfo.onclick = function(){
    hide_opciones_menus()
    unstyle_area_buttons()
    unstyle_buttons()
    this.style.color = "white";
    areabotoninfo.style.borderBottom = "2px solid white"
    opcionesinfo.style.display = "flex"
}


const editor = CodeMirror(document.querySelector("#inputText"), {
    lineNumbers: true,
    tabSize: 2,
    value: "",
    theme: "dracula",
    mode: "text/x-csrc",
    });


"use strict";

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  document.getElementById("inputText").value = contents;
  myFunction();
}



function save_file(){
	var output_lang = document.getElementById("outputLang").value.trim();
	var input_lang = document.getElementById("inputLang").value.trim();
	var output_text = parse_lang(input_lang,output_lang, document.getElementById("inputText").value);
	var extension = file_extension(output_lang);
	var file_name = window.prompt("Choose a name for the file","output");
	var lenguaje_salida = document.getElementById("outputLang")
	var extension_lenguaje_salida

	switch (lenguaje_salida.value) {
		case "C":
			extension_lenguaje_salida = "c"
			break;
		case "C#":
			extension_lenguaje_salida = "cs"
			break;  
		case "PHP":
			extension_lenguaje_salida = "php"
			break;       
		case "Python":
			extension_lenguaje_salida = "py"
			break;
		case "JavaScript":
			extension_lenguaje_salida = "js"
			break;
		case "Prolog":
			extension_lenguaje_salida = "pl"
			break;
	
		default:
			break;
	}

	
	download_file(file_name+"."+extension_lenguaje_salida,output_text);
	
}

function persistence(){
	// Get the input box
	var textInput = document.getElementById('inputText');
	var inputLang = document.getElementById('inputLang');
	var outputLang = document.getElementById('outputLang');


	var timeout = null;
	textInput.oninput = function (e) {
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			myFunction();
		}, 500);
	};

	inputLang.oninput = textInput.oninput;
	outputLang.oninput = textInput.oninput;
	document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
	if(window.location.hash){
		var parsed_hash = JSON.parse(decodeURIComponent(window.location.hash.substring(1)));
		localStorage.setItem("inputText",parsed_hash["inputText"]);
		localStorage.setItem("inputLang",parsed_hash["inputLang"]);
		localStorage.setItem("outputLang",parsed_hash["outputLang"]);
		//alert(window.location.hash.substring(1));
	}
	
	["inputText","inputLang","outputLang"].forEach(function(element) {
    	if(localStorage.getItem(element) !== undefined){
			document.getElementById(element).value = localStorage.getItem(element);
		}
	});
	myFunction();
}

function switch_langs(){
	var temp = document.getElementById("outputLang").value;
	document.getElementById("outputLang").value = document.getElementById("inputLang").value;
	document.getElementById("inputLang").value = temp;
	temp = document.getElementById("outputText").value;
	document.getElementById("outputText").value = document.getElementById("inputText").value;
	document.getElementById("inputText").value = temp;
	
}

function myFunction() {
    var inputLang = document.getElementById("inputLang").value;
    var outputLang = document.getElementById("outputLang").value;
    var inputText = document.getElementById("inputText").value;
    var outputText;
    window.location.hash=encodeURIComponent(JSON.stringify({inputText:inputText,inputLang:inputLang,outputLang:outputLang}));
    //try{
    //
				outputText = parse_lang(inputLang,outputLang.trim(), inputText);
				document.getElementById("outputText").value = outputText;
				localStorage.setItem("outputText",outputText);
	//}
	//catch(e){
		//outputText = e;
	//}
			document.getElementById("outputText").value = outputText;
			localStorage.setItem("outputText",outputText);
			localStorage.setItem("outputLang",outputLang);
			localStorage.setItem("inputText",inputText);
			localStorage.setItem("inputLang",inputLang);

}

function cambiarlogos(){

var logocodigoentrada = document.getElementById("logo_codigo_entrada")
var logocodigosalida = document.getElementById("logo_codigo_salida")
var auxlogo

auxlogo = logocodigoentrada.innerHTML
logocodigoentrada.innerHTML = logocodigosalida.innerHTML
logocodigosalida.innerHTML = auxlogo

	
}
