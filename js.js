function seleccionar(elemento) {
	reestablecer(elemento.classList[0]);
	elemento.classList.add("btn-danger");
}


function reestablecer(clase) {
	elementos = document.getElementsByClassName(clase)
	for (var i = elementos.length - 1; i >= 0; i--) {
		elementos[i].classList.remove("btn-danger");
	}
}



function calcular() {

	var resultado = 0;

	elementos = document.getElementsByClassName("btn-danger");

	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].getAttribute("alt") == "Opcion A"){
			resultado = resultado + 1;
		}
		if (elementos[i].getAttribute("alt") == "Opcion B"){
			resultado = resultado + 2;
		}
		if (elementos[i].getAttribute("alt") == "Opcion C"){
			resultado = resultado + 3;
		}
		if (elementos[i].getAttribute("alt") == "Opcion D"){
			resultado = resultado + 4;
		}
	}

	if (document.getElementsByClassName("btn-danger").length < 4) {
		document.getElementById("resultado").innerHTML = "Por favor, contesta a todas las preguntas.";
	}
	else if (resultado >= 4 && resultado < 7)	{
		document.getElementById("imagenResultado").src = "img/MedraBox.jpg";
		document.getElementById("textoResultado").innerHTML = "Eres un Medrano deportista. Te gusta madrugar para ir al gimnasio antes de clase. Estás fanegas pero estás bien.";
	}
	else if (resultado >= 7 && resultado < 10) {
		document.getElementById("imagenResultado").src = "img/MedraCIencia.png";
		document.getElementById("textoResultado").innerHTML = "Eres un Medrano científico. Te gusta apuntarte a cosas de las que no tienes ni idea. Lo importante es aprender cosas nuevas.";

	}
	else if (resultado >=10 && resultado < 13) {
		document.getElementById("imagenResultado").src = "img/MedraFestival.jpeg";
				document.getElementById("textoResultado").innerHTML = "Eres un Medrano festivalero. Te metes en los pogos y cuentas bajas enemigas. En el mes de agosto tienes la mano como un Playmobil.";

	}
	else if (resultado >= 13 && resultado <=16) {
		document.getElementById("imagenResultado").src = "img/MedraPC.png";
		document.getElementById("textoResultado").innerHTML = "Eres un Medrano informático. Te gusta estar ahí taca taca taca programando. Guerrero Furia con 218 de ilvl.";

	}


	document.getElementById("imagenResultado").classList.remove("invisible");
	document.getElementById("imagenResultado").classList.add("visible");


	document.getElementById("resultado").innerHTML = resultado;
	resultado = 0;
}