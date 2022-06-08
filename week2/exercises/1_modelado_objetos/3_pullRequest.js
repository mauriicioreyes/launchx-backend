const pullRequest = {
    title: "Actualiza rutas de archivos",
    brachName: "",
    dateCreated: new Date(),
    status: "OPEN",
    repositoryNameAssociated: "",
    author: "Ing. Daniel",

    getStatus: function() {
        return `\nPR: ${this.title}, status: ${this.status}`
    },

    getTitleAndAuthor: function() {
        return `\nPull Request: ${this.title} \nAuthor: ${this.author}`
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())