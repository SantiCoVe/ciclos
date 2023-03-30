/*Cree un programa que calcula la suma de los primeros n números naturales. Use ciclo for*/
let n = parseInt(prompt("ingrese el limite de numeros"))
let resul = 0;

for (let index = 1; index <= n; index ++) {
    numero = parseFloat(prompt("ingrese un numero"));
    resul = numero+resul
    numero ++
}
console.log("la suma de los numeros ingresados es: ",resul)