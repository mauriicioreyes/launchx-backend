console.log("\nCreación de un objeto con propiedades")

const explorer = {
    name: "Mauricio Reyes",
    age: 25,
    mission: "Node JS",
    stack: ["js", "node", "react", "vue"],
    blog: {
        url: "https://mauriicioreyes.github.io/my_launchx_blog/",
        post: 5
    } // esto es un objeto dentro de otro objeto
}

console.log(explorer)

console.log("\nAccediendo a las propiedades del objeto")
console.log("explorer.name : " + explorer.name)
console.log("explorer['age'] : " + explorer['age'])