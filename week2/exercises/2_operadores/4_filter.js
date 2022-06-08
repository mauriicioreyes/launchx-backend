import { explorers } from "./lista.js"

const expl = explorers

const stackExplorer = expl.map((explorer) => {
    return explorer.stack
})

const stackJS = stackExplorer.filter((explorer) => 
    explorer.includes('js')
)

console.log("\nEjercicio 4: Obtener lista de explorers con stack 'js'")

console.log(stackJS)