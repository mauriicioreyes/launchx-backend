// Ejemplo 7: Uso de filter para filtrar una lista de elementos

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
)

console.log("\nEJEMPLO 7: Uso de filter para filtrar una lista de elementos \n(países que contienen 'land')")
console.log(countries)
console.log(countriesContainingLand)

const countriesEndsBy = countries.filter((country) => 
    country.endsWith('y')
)

console.log("\nPaíses que terminan en y")
console.log(countriesEndsBy)