// Ejemplo 8: Métodos estáticos (static), nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto

class Toolbox {
    static getMostUsefulTools() {
        return ["Command Line", "Git", "Text Editor"]
    }
}

console.log("\nEjemplo 8: Métodos estáticos")

// Puedo llamar el método estático directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())