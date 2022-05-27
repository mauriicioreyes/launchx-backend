// Ejemplo 10: Uso de every, nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario, false.

const names = ['José', 'Antonio', 'Daniel', 'Carlos', 'María', 'Fernanda', 'Michel']

const areAllStr = names.every((name) => 
    typeof name === 'string'
)

console.log("\nEjemplo 10: Son todos los nombres string: " + areAllStr)
console.log(names)