import { explorers } from "./lista.js";

const expl = explorers

console.log("\nEjercicio 1: Imprimir nombre de cada explorer con forEach")
expl.forEach((element) =>
    console.log(element.name)
)