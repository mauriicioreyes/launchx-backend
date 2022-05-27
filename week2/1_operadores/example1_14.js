// Ejemplo 14: Uso de some, este método validará todos los elementos de una lista y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

const bools = [true, true, false, true]

const areSomeTrue = bools.some((b) => b === false)

console.log("\nEjemplo 14: Uso de 'some' \nAlguno de los elementos en el array es false: " + areSomeTrue)
console.log(bools)