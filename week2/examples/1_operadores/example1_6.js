// Ejemplo 6: Uso de Map para convertir todos los nombres de países en una lista a mayúsculas

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesFirstThreeLetters = countries.map((element) => element.toUpperCase().slice(0,3))

console.log("\nEJEMPLO 6: Uso de map para convertir las 3 primeras letras de un país a mayúsculas")
console.log(countries)
console.log(countriesFirstThreeLetters)