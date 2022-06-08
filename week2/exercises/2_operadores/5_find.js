import { explorers } from "./lista.js"

const expl = explorers

const livesInCDMX = expl.find((city) => city = "CDMX")

console.log("\nEjercicio 5: Buscar primer explorer que sea de CDMX")

console.log(livesInCDMX.name)