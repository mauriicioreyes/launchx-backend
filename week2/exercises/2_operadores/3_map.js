import { explorers } from "./lista.js"

const expl = explorers

const stackExplorer = expl.map((explorer) => {
    return explorer.stack
})

console.log("\nEjercicio 3: Crear una lista con el stack de cada explorer")

console.log(stackExplorer)