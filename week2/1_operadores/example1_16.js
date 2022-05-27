// Ejemplo 16: Ordenando una lista de objetos

const users = [
    { name: 'Berenice', age: 27 },
    { name: 'Alejandra', age: 22 },
    { name: 'Naomi', age: 32 },
    { name: 'Victor', age: 50 },
    { name: 'Celeste', age: 25 },
    { name: 'Adan', age: 99 },
]

users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})

console.log("\nEjemplo 16: Ordenando una lista de objetos por la edad")
console.log(users)