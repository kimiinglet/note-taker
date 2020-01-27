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
        //for loop looping through exsiting notes and find the highest ID
        //reading all the notes
        var file = fs.readFileSync('./db.json', { encoding: 'utf8' });
        //if we got something, we try to parse to JSON
        if (file.length > 0) {
            var existingNotes = JSON.parse(file);
            //loops through to check id against last id
            for (let i = 0; i < existingNotes.length; i++) {
                const note = existingNotes[i];
                //If lastID < notedId we save it for later
                if (this.lastId < note.id) {
                    this.lastId = note.id;
                }
            }
        }
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

        //create a loop that loops through all of the notes to grab the note with id = id
        return this.read()
            .then(notes => {

                notes = [].concat(JSON.parse(notes))
                for (let i = 0; i < notes.length; i++) {
                    const note = notes[i];
                    if (note.id == id) {
                        //delete note from array
                        //splice(position, total, push the rest to cont array)
                        notes.splice(i, 1)
                        //break is to stop the loop
                        break;
                    }
                }
                //now we need to save
                this.write(notes)

            })



    }
}


module.exports = new Store();