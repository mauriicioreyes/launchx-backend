// Ejemplo 10: Overriding methods

class Explorer {
    constructor(name, username, mission) {
        this.name = name,
        this.username = username,
        this.mission = mission
    }

    getNameAndUsername() {
        return `\nexplorer ${this.name}, username: ${this.username}`
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle) {
        // SUPER nos ayudará a llamar el constructor padre
        super(name, username, mission)

        // Agregamos este atributo de la clase Viajero, es exclusivo de esta clase y no de la clase padre
        this.cycle = cycle
    }

    getGeneralInfo() {
        // Llamamos el método de la clase padre
        // nameAndUsername es una variable de esta función, no necesitas usar this para referenciarla
        let nameAndUsername = this.getNameAndUsername()
        return `${nameAndUsername}, ciclo: ${this.cycle}`
    }
}

const viajero1 = new Viajero("Rafael", "LaunchX", "Node JS", "Abril 2022")

console.log("\nEjemplo 10: Overriding methods")
console.log(viajero1)
// Método de la clase padre
console.log(viajero1.getNameAndUsername())
// Método de la clase hija
console.log(viajero1.getGeneralInfo())