
let palabra1 = document.querySelector('.palabra1');
let palabra2 = document.querySelector('.palabra2');
const boton = document.querySelector('#task');

const mensaje = document.querySelector('.msj');

let contador1 = 0;
let contador2 = 0;
let letrasiguales = 0;

boton.addEventListener('submit', iniciar);


function iniciar(e) {

e.preventDefault();

let str1 = palabra1.value;
let str2 = palabra2.value;

let p1 = Array.from(str1);
let p2 = Array.from(str2);

console.log(p1);
console.log(p2);

if (str1.length == str2.length){
p1.forEach(myFunction);

	console.log("Letras iguales: " + letrasiguales);
	if(letrasiguales == str1.length){
		mensaje.innerHTML = "Es un anagrama!"
		setTimeout(message, 2500);
		palabra1.value = "";
		palabra2.value = "";
	}
	else{
		mensaje.innerHTML = "No es un anagrama";
		setTimeout(message, 2500);
		palabra1.value = "";
		palabra2.value = "";
	}

letrasiguales = 0;

}
else

mensaje.innerHTML = "Las palabras deben tener la misma cantidad de letras";


function message(){
	mensaje.innerHTML = "";
}

function myFunction(x){
	for (let i = 0; i < p1.length; i++) {

		if(x === p1[i]){
			contador1++;
		}
	}
	
	for (let j = 0; j < p1.length; j++) {

		if(x === p2[j]){
			contador2++;
		}
	}
	
	if(contador1 === contador2)
		letrasiguales++;

	contador1 = 0;
	contador2 = 0;
}

}

