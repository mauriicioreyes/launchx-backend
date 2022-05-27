// Ejemplo 11: Uso de find para encontrar el primer elemento de la lista que cumpla con lo que indiques

const ages = [24, 22, 19, 15, 56, 90, 12, 22, 30]
const age = ages.find((age) => age < 20)

console.log("\nEjemplo 11: Primera edad menor a 20 es: " + age)