// Ejemplo 7: Setters para modificar los atributos del objeto

class MissionCommander {
    constructor(name, mission) {
        this.name = name,
        this.mission = mission,
        this.students = 0,
        this.lives = 0
    }

    get getStudents() {
        return this.students
    }

    get getLives() {
        return this.lives
    }

    set setStudents(students) {
        this.students = students
    }

    set setLives(lives) {
        this.lives = lives
    }
}

const missionCommanderNode = new MissionCommander("Carlos", "NodeJS")

console.log("\nEjemplo 7: Setters para modificar los atributs del objeto")
console.log(missionCommanderNode)
console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)

missionCommanderNode.setStudents = 25
missionCommanderNode.setLives = 5

console.log(missionCommanderNode)
console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)