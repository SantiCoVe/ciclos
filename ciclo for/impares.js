/*Cree un programa que muestre los números impares entre 1 y n. Use ciclo for */
let numero = parseInt(prompt("Ingrese el limite"))
for (let index = 1; index <= numero;  index++) 
{
    if (index %2 != 0 ) {
        console.log(index);
    }
    
}