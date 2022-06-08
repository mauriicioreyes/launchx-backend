import { explorers } from "./lista.js"

const expl = explorers

const exercisesAreFinished = expl.some((element) =>
    element.missions.frontend.exercisesFinished === true
)

console.log("\nEjercicio 7: Valida si al menos un explorer terminó los ejercicios de la misión frontend")
console.log(exercisesAreFinished)