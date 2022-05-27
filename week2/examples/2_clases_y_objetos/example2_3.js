// Ejemplo 3: Instanciar un objeto con atributos

class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects) {
        this.name = name,
        this.age = age,
        this.subjects = subjects
    }
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const mauStudent = new Student("Mauricio", 25, ["NodeJS", "JavaScript", "Python"])

console.log("\nEjemplo 3: Instanciar un objeto con atributos")
console.log(mauStudent)
console.log(mauStudent.name)
console.log(mauStudent['age'])
console.log(mauStudent['subjects'][1])
console.log(mauStudent.subjects[2])