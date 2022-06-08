import { explorers } from "./lista.js";

const expl = explorers;

console.log("\nEjercicio 2: Imprimir el stack de cada explorer con forEach")

expl.forEach((element) =>
    console.log(element.stack)
)