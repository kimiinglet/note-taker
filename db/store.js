//dependencies
const fs = require("fs");
const util = require("util");

//creating a promise, so the program stops to complete this task
//async read about it
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)


class Store {
    constructor() {
        this.lastId = 0
    }
    read() {
        return readFileAsync("./db.json", "utf8")
    }
    
    write(note) {
        return writeFileAsync("./db.json", json.stringify(note))
    }

    getNote() {

    }

    addNote(note) {

    }

    deleteNote(id) {

    }

    
}

module.exports = new Store();