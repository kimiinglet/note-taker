//dependencies
const fs = require("fs");
const util = require("util");

//creating a promise, so the program stops to complete this task
//async read about it
const readFileAsync = util.promisify(fs.readFile)
const writeFIleAsync = util.promisify(fs.writeFile)


class Store {
    constructor() {
        this.lastId = 0
    }
    read() {

    }
    
    write(note) {
        
    }

    getNote() {

    }

    addNote(note) {

    }

    deleteNote(id) {

    }

    
}

module.exports = new Store();