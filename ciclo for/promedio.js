/* Cree un programa que calcule el promedio de 10 números. Use ciclo for */
let numero = 0;
let resul = 0;

for (let index = 1; index <= 10; index ++) {
    numero = parseFloat(prompt("ingrese un numero"));
    resul = resul + numero;
}
console.log("el promedio de los numeros ingresados es: " + resul/10)