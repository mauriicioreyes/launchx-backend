// Ejemplo 5: Atributos con valores por default

class PullRequest {
    constructor(repo, title, lines_changed) {
        this.repo = repo,
        this.title = title,
        this.lines_changed = lines_changed,
        this.status = "OPEN",
        // Esto guardará la fecha actual en que se instancia el objeto
        this.dateCreated = new Date()
    }

    getInfo() {
        return `\nThis PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}. \nMessage: '${this.title}'.`
    }
}

const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 15)
console.log("\nEjemplo 5: Atributos con valores por default")
console.log(myPR1.getInfo())

const myPR2 = new PullRequest("LaunchX", "Mi Segundo PR", 99)
console.log(myPR2.getInfo())