// Ejemplo 4: Métodos en los objetos

class Repository {
    constructor(name, author, language, stars) {
        this.name = name,
        this.author = author,
        this.language = language,
        this.stars = stars
    }

    // getInfo() es una función que ejecutará cualquier objeto instanciado de esta clase
    getInfo() {
        return `Repository '${this.name}' has ${this.stars} stars. \nCreated by ${this.author}.`
    }
}

const myRepo = new Repository("LaunchX", "mauriicioreyes", "JavaScript", 4)

console.log("\nEjemplo 4: Métodos en los objetos")
console.log(myRepo.getInfo())