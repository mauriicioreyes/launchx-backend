// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.

const names = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4', 'Explorer S', 'Don Explorador']

const result = names.findIndex((name) => name.length > 10)

console.log("\nEjemplo 13: Uso de findIndex \nPrimer elemento cuya palabra sea mayor a 7 está en la posición: " + result)