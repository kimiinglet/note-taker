//dependencies
const fs = require("fs");
const util = require("util");

//creating a promise, so the program stops to complete this task
//async read about it
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)


class Store {
    constructor() {
        //keeping track of last note written
        this.lastId = 0
    }
    read() {
        return readFileAsync("./db.json", "utf8")
    }

    write(note) {
        return writeFileAsync("./db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read()
            .then(notes => {
                //variable were going to set to an array
                let parseNotes;
                //do this
                try {
                    // .concat combines strings together
                    parseNotes = [].concat(JSON.parse(notes));
                }
                catch (err) {
                    parseNotes = [];
                }
                return parseNotes;
            })
    }

    addNote(note) {

        //1.give a note a new id
        note.id = this.lastId + 1
        this.lastId = note.id

        //2.Add the note to the file
        return this.read()
            .then(notes => {
                //making an array of notes from the ones saved into file
                //1. gets notes from file
                let parseNotes = [].concat(JSON.parse(notes))

                //2. add the new note to the list on the file
                parseNotes.push(note)
                //3. Save all the notes to the file
                console.log(parseNotes)
                this.write(parseNotes)
                return note;
            })
    }
    deleteNote(id) {

        //   * DELETE `/api/notes/:id` - Should recieve a query paramter containing 
        // the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when 
        // it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove 
        // the note with the given `id` property, and then rewrite the notes to the `db.json` file.
        


    }
}


module.exports = new Store();