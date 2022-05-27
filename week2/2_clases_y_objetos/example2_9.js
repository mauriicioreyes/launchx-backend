// Ejemplo 9: Herencia entre dos clases

// Herencia: Nos permite relacionar clases entre sí y rehusar sus componentes

class Developer {
    constructor(name, mainLang, stack) {
        this.name = name,
        this.mainLang = mainLang,
        this.stack = stack
    }

    get getName() {
        return this.name
    }
}

const mauricioDev = new Developer("Mauricio", "JavaScript", ["mongoDB", "Express", "React", "NodeJS"])

console.log("\nEjemplo 9: Herencia entre dos clases")
console.log(mauricioDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase padre (Developer) en la clase definida.
// Podemos definir una clase vacía y reusar todos los componentes de la clase padre.

class LaunchXStudent extends Developer {

}

const carlosLaunchXDev = new LaunchXStudent("Carlos", "JavaScript", ["Xamarin", "Android", "Swift"])

console.log("\nHeredamos en 'LaunchXStudent' la clase 'Developer'")
console.log(carlosLaunchXDev)

// Getter de la clase padre reusado en la clase hija
console.log(carlosLaunchXDev.getName)