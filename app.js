
/*++++++++++++++DECLARACION DE VARIABLES++++++++++++++*/
let palabra1 = document.querySelector('.palabra1');
let palabra2 = document.querySelector('.palabra2');
const boton = document.querySelector('#task');
const mensaje = document.querySelector('.msj');
const btn = document.querySelector('button');
/*++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*+++++++++++++FUNCIONALIDAD DEL PROGRAMA+++++++++++++*/

//funcionalidad para limpiar los inputs en caso de refresh (si no, no lo hacía).
window.onload = limpiarInputs();

//Cada submit del botón 'verificar' inicia la función principal.
boton.addEventListener('submit', iniciar);

//Función que borra del input las palabras ingresadas.
function limpiarInputs(){
	palabra1.value = "";
	palabra2.value = "";
}

//Función que después de 2,5 segundos borra el mensaje de resultados.
function limpiarMensaje(){
	mensaje.classList = "text-center msj";
	btn.disabled = false;
	mensaje.innerHTML = '&nbsp'; //Para agregar un espacio en blanco (entidad HTML), se debe usar innerHTML y no innerText
}

//Función que muestra un mensaje en pantalla, recibe una clase para el color del texto y un string con el texto.
function mostrarMensaje(colorClase, texto){
	btn.disabled = true;
	mensaje.classList.add(colorClase);
	mensaje.innerText = texto;
	setTimeout(limpiarMensaje, 2500);
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
	//En cada caso, se llama a la función de mostrar el resultado, y un timeout para borrarlo.
	if(p1.length == 0 || p2.length == 0){
		mostrarMensaje('mensajeLila', 'Se deben ingresar dos palabras');
	} else {
		//Luego chequeo que tengan la misma cantidad de letras, sino se muestra el mensaje del 'else'.
		if(p1.length === p2.length){
			//La función 'anagrama()' retorna un boolean.
			if(!anagrama(p1, p2)){
				mostrarMensaje('mensajeRojo', `Las palabras '${palabra1.value}' y '${palabra2.value}' no resultan en un anagrama`);
			} else {
				mostrarMensaje('mensajeVerde', `Las palabras '${palabra1.value}' y '${palabra2.value}' sí forman un anagrama`);
			}
		} else {
			mostrarMensaje('mensajeRojo', 'No es anagrama porque no tienen la misma cantidad de letras');
		}
	}

	//Se llama a la función para limpiar los dos inputs.
	limpiarInputs();
}

/*++++++++++++++++++++++++++++++++++++++++++++++++++++*/
