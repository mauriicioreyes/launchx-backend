// Ejemplo 4: Objeto con método que recibe parámetros

const myPet = {
    name: "Crazy",
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("\nObjeto con método que recibe parámetros")
console.log(myPet)
myPet.sayHelloToMyPet('Chuchita')