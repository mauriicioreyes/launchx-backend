import { explorers } from "./lista.js"

const expl = explorers

const resultExercisesCompleted = expl.reduce((acc, element) =>
    acc + element.exercises_completed, 0
)

console.log("\nEjercicio 6: Suma de exercises_completed")
console.log(resultExercisesCompleted)