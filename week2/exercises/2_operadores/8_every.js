import { explorers } from "./lista.js"

const expl = explorers

const onboardingIsFinished = expl.every((explorer) =>
    explorer.missions.onboarding.isFinished === true
)

console.log("\nEjercicio 8: Valida si todos los explorer terminaron el onboarding")
console.log(onboardingIsFinished)