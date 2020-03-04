
/*++++++++++++++DECLARACION DE VARIABLES++++++++++++++*/
let palabra1 = document.querySelector('.palabra1');
let palabra2 = document.querySelector('.palabra2');
const boton = document.querySelector('#task');
const mensaje = document.querySelector('.msj');
/*++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*+++++++++++++FUNCIONALIDAD DEL PROGRAMA+++++++++++++*/

//Cada submit del botón 'verificar' inicia la función principal.
boton.addEventListener('submit', iniciar);

//Función que borra del input las palabras ingresadas.
function limpiar(){
	palabra1.value = "";
	palabra2.value = "";
}

//Función que después de 2,5 segundos borra el mensaje de resultados.
function limpiarMensaje(){
	mensaje.innerText = "";
}

//Función que chequea si dos palabras son o no un anagrama.
//Recibe dos arrays de letras ordenados, y chequea con un for si los elementos en la misma posición son iguales.
//Solamente es llamado cuando ambos arrays tienen la misma cantidad de elementos.
function anagrama(p1, p2){
	let flag = true;
	for (let i = 0; i < p1.length; i++) {
		if(p1[i] !== p2[i]){
			flag = false;
			break;
		}
	}
	return flag;
}

//Función principal.
function iniciar(e){

	//Como hay un 'submit', se detiene el reload de la página.
	e.preventDefault();

	//Guardo en 2 arreglos ambas palabras, pasadas a minúsculas.
	let p1 = Array.from(palabra1.value.toLowerCase());
	let p2 = Array.from(palabra2.value.toLowerCase());

	//Ordeno ambos arreglos. El sort sirve para chars, y si hay números en el array, serán tratados como chars.
	p1.sort();
	p2.sort();
	
	//Primero chequeo que se hayan ingresado dos palabras y no haya uno o dos campos vacíos.
	if(p1.length == 0 || p2.length == 0){
		mensaje.innerText = "Se deben ingresar dos palabras";
		setTimeout(limpiarMensaje, 2500);
	} else {
		//Luego chequeo que tengan la misma cantidad de letras, sino se muestra el mensaje del 'else'.
		if(p1.length === p2.length){
			//La función 'anagrama()' retorna un boolean.
			if(!anagrama(p1, p2)){
				mensaje.innerText = `Las palabras '${palabra1.value}' y '${palabra2.value}' no resultan en un anagrama`;
				//Se hace un 'timeout' para borrar el mensaje de resultado después de 2,5 segundos.
				setTimeout(limpiarMensaje, 2500);
			} else {
				mensaje.innerText = `Las palabras '${palabra1.value}' y '${palabra2.value}' sí forman un anagrama`;
				setTimeout(limpiarMensaje, 2500);
			}
		} else {
			mensaje.innerText = "No es anagrama porque no tienen la misma cantidad de letras";
			setTimeout(limpiarMensaje, 2500);
		}
	}

	//Se llama a la función para limpiar los dos inputs.
	limpiar();
}

/*++++++++++++++++++++++++++++++++++++++++++++++++++++*/
