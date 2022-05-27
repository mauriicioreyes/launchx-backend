// Ejemplo 9: Uso del reduce

const numbers = [0, 1, 2, 3, 4, 5, 23, 9]
const result_of_reduce = numbers.reduce((acc, element) => 
    acc + element, 0
)

console.log("\nEjemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(numbers)
console.log(result_of_reduce)