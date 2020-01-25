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
        return this.read()
        .then(notes => {
            //variable were going to set to an array
            let parseNotes;
            //do this
            try {
                // .concat combines strings together
                parseNotes = [].concat(JSON.parse(notes));
            }
            catch(err) {
                parseNotes = [];
            }
            return parseNotes;
        })
    }

    addNote(note) {
// how to append the note to the page
    }

    deleteNote(id) {
// how to delete the note selected
    }
    
}

module.exports = new Store();