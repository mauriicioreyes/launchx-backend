// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
    constructor(name, age, stack) {
        this.name = name,
        this.age = age,
        this.stack = stack,
        this.exercises_completed = 0,
        this.exercises_todo = 99
    }

    get getExercisesCompleted () {
        return this.exercises_completed
    }

    get getExercisesToDo () {
        return this.exercises_todo
    }
}

const woopa = new Ajolonauta("Woopa", 1, [])

console.log("\nEjemplo 6: Getters para acceder a los atributos del objeto")
console.log(woopa)
console.log(woopa.getExercisesCompleted)
console.log(woopa.getExercisesToDo)
