let notesTitles = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let trashNotesTitles = [];
let trashNotes = [];

function init() {
    loadFromLocalStorage();
    renderNotes();
    renderTrashNotes();

}


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplates(indexNote);
    }
    saveToLocalStorage();
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplates(indexTrashNote);
    }
    saveToLocalStorage();
}

function getNoteTemplates(indexNote) {
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="pushToTrash(${indexNote})">X</button></p>`;
}

function getTrashNoteTemplates(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button><button onclick="fromTrashToNote(${indexTrashNote})">J</button></p>`;
}

function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    noteInputRef.value = "";
    renderNotes();
}

function pushToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);

    let trashNotesTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNotesTitle[0]);

    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderTrashNotes();
    saveToLocalStorage();
}

function fromTrashToNote(indexTrashNote) {
    notes.push(trashNotes[indexTrashNote]);
    notesTitles.push(trashNotesTitles[indexTrashNote]);

    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes();
    saveToLocalStorage();
    
}

function saveToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('notesTitles', JSON.stringify(notesTitles));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
    localStorage.setItem('trashNotesTitles', JSON.stringify(trashNotesTitles));
}

function loadFromLocalStorage() {
    const loadNotes = localStorage.getItem('notes');
    const loadTitles = localStorage.getItem('notesTitles');
    const loadTrashNotes = localStorage.getItem('trashNotes');
    const loadTrashNotesTitles = localStorage.getItem('trashNotesTitles');

    if(loadNotes != null){
        notes = JSON.parse(loadNotes);
    }
    else{
        notes = [];
    }

    if(loadTitles != null){
        notesTitles = JSON.parse(loadTitles);
    }
    else{
        notesTitles = [];
    }

    if(loadTrashNotes != null){
        trashNotes = JSON.parse(loadTrashNotes);
    }
    else{
        trashNotes = [];
    }

    if(loadTrashNotesTitles != null){
        trashNotesTitles = JSON.parse(loadTrashNotesTitles);
    }
    else{
        trashNotesTitles = [];
    }
}

