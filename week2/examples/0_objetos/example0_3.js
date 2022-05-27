console.log("\nObjeto con métodos")

const ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHelloToExplorers: function() {
        console.log("Soy el ajolonauta, ¡que onda!")
    },
    tellMeMore: function() {
        return `Ajolonauta: ${this.name}`
    }
}

console.log(ajolonauta)
console.log("\nAjolonauta:")
ajolonauta.sayHelloToExplorers()
console.log(ajolonauta.tellMeMore())