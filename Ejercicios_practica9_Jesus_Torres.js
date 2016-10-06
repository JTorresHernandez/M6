//Practica_9

// 1.2 Banco

function Banco() {
	var num_cuenta= [];
	var nombre= [];
	var saldo= [];
	var s= "";
	var acreedor= 0;
	var a= prompt("Numero de cuenta? ");
	var usuario= 0;
	var n= 0;

	while (n > 0) {
		num_cuenta[usuario]= n;
		a= prompt("Nombre de usuario? ");
		nombre[usuario]= n;
		a= prompt("Cual es su saldo? ");
		saldo[usuario]=parseInt(n);
		a= prompt("Numero de cuenta? ");
		usuario++;
	}
	for (var i= 0; i < usuario; i++) {
		s+= "Su numero de cuenta: "+ num_cuenta[i] + " y nombre es: " + nombre[i] + "   ";
		if (saldo[i] < 0) {
			s+= "Su estado de cuenta es: Deudor";
		}else if(saldo[i] > 0) {
			s+= "Su estado de cuenta es: Acreedor";
		}else{
			s+= "Su estado de cuenta es: Nulo";
		}
		
	}
	for (var i=0 ; i < usuario; i++){
		if(saldo[i] > 0){
			acreedor += saldo[i];
		}

	}
	document.write(s);
		document.write("Saldo de los acreedores: " + acreedor);
	}
	
//Ejercicio 2.1

	function Triangulo(){
	
	var base;
	var altura;
	var superficie;
	var s = 0;
	
	for (var i = 1; i <= 3 ; i++){
	
		base= prompt("Base: ");
		base= parseInt(base);
		altura= prompt("Altura: ");
		altura= parseInt(altura);
		superficie= base * altura / 2;
		if (superficie > 12) {
		 s++;
}
		 document.write("Numero triangulo: " + i + "<br>");
		 document.write("Su base: " + base + "<br>");
		 document.write("Su altura: " + altura + "<br>");
		 document.write("Su superficie: " + superficie + "<br>");
		 

}
		document.write(s + " Numero de triangulos con superficie mayor a 12 <br>");
}

//Ejercicio 2.7

function Enteros() {

var num_negativos = 0;
var num_positivos = 0;
var multiplos = 0;
var totalpares= 0;
var num;

for(i = 1; i <= 10 ; i++) {

	num= prompt("introduce un valor");
	num= parseInt(num);
	if (num <0) {

		num_negativos++;
	}

	else {

		if(num > 0) {

			num_positivos++;
		}
	}

	if(num % 15 == 0 && num != 0) {
		multiplos++;
	}
	if(num % 2 == 0) {
		totalpares= totalpares + num;
	}
}
	document.write("Valores de cantidad negativos: " + num_negativos + "<br>");
	document.write("Valores de cantidad positivos: " + num_positivos + "<br>");
	document.write("Numero de multiplos de 15: " + multiplos + "<br>");
	document.write("La suma de los pares es: " + totalpares + "<br>");


}
Banco();
Triangulo();
Enteros();