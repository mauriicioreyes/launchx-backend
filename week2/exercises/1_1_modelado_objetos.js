const repo = {
    name: "LaunchX",
    author: "mauriicioreyes",
    language: "JavaScript",
    numberOfCommits: "5",
    stars: "3",
    forks: "2",
    issues_open: 7,
    issues_close: 10,
    
    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },

    getGeneralInfo: function() {
        return `This repository '${this.name}' was created by ${this.author}.`
    }
}

console.log("\nNombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())