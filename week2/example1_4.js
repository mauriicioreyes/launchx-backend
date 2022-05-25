// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista

/**
 * Arrow function and explicit return
 * const modifiedArray = arr.map((element, index) => element);
 */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersSquare = numbers.map(function (num) { return num * num })

// También puedes escribir la función como arrow function
const numbersSquareArrow = numbers.map((num) => { return num * num })

console.log("\nEJEMPLO 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)
console.log(numbersSquareArrow)