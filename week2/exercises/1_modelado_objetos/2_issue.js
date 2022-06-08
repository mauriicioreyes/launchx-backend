const issue = {
    title: "Error en directorios",
    repositoryNameAssociated: "Backend Node JS",
    status: "OPEN",
    numberOfComments: 10,
    labels: "Hot-Fix",
    author: "mau",
    dateCreated: new Date(),
    lastUpdated: new Date(),

    getTitleAndAuthor: function() {
        return `\nIssue: "${this.title}" \nCreated by: ${this.author}`
    },

    getGeneralInfo: function() {
        return `\nIssue: "${this.title}" was created by ${this.author} on ${this.dateCreated}. \nLast update: ${this.lastUpdated}. \nStatus: ${this.status} \nNumber of comments: ${this.numberOfComments} \nlabels: ${this.labels}`
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())