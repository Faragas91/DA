let notesTitles = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let trashNotesTitles = [];
let trashNotes = [];

function init() {
    loadFromLocalStorage();  // Daten zuerst laden
    renderNotes();  // Dann die Notizen und den Papierkorb rendern
    renderTrashNotes();
}


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplates(indexNote);
    }
    saveToLocalStorage();  // Speichere die aktuellen Daten in den LocalStorage
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplates(indexTrashNote);
    }
    saveToLocalStorage();  // Speichere die aktuellen Daten in den LocalStorage
}

function addNote(){
    let noteInputTitleRef = document.getElementById('note_title_input');
    let noteInputTitle = noteInputTitleRef.value;

    let noteInputTaskRef = document.getElementById('note_task_input');
    let noteInputTask = noteInputTaskRef.value;

    if (noteInputTitle === "" || noteInputTask === "") {
        showError(noteInputTitle, noteInputTask);
        return;
    }

    notesTitles.push(noteInputTitle);
    noteInputTitleRef.value = "";

    notes.push(noteInputTask);
    noteInputTaskRef.value = "";

    showSuccessMessage();  // Nach dem Hinzufügen einer Notiz eine Meldung anzeigen

    noteInputTitleRef.classList.remove('error');
    document.getElementById('title-error').innerText = "";

    noteInputTaskRef.classList.remove('error');
    document.getElementById('task-error').innerText = "";
   
    renderNotes();  // Nach dem Hinzufügen von Notizen rendern und speichern
}

function showError(isTitleEmpty, isTaskEmpty) {
    let noteInputTitleRef = document.getElementById('note_title_input');
    let noteInputTaskRef = document.getElementById('note_task_input');

    if (isTitleEmpty) {
        noteInputTitleRef.classList.add('error');
        document.getElementById('title-error').innerText = "Bitte einen Titel eingeben";
        }
        else {
            noteInputTitleRef.classList.remove('error');
            document.getElementById('title-error').innerText = "";
        }
    if (isTaskEmpty) {
        noteInputTaskRef.classList.add('error');
        document.getElementById('task-error').innerText = "Bitte eine Aufgabe eingeben";
        }
        else {
            noteInputTaskRef.classList.remove('error');
            document.getElementById('task-error').innerText = "";
        }
}

function showSuccessMessage() {
    let messageContainer = document.getElementById('success-message');
    messageContainer.innerText = "Notiz erfolgreich hinzugefügt";
    messageContainer.style.display = "block";

    setTimeout(() => {
        messageContainer.style.display = "none";
    }, 2000);
};

function pushToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);

    let trashNotesTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNotesTitle[0]);

    renderNotes();  // Updates in den Notizen und im Papierkorb rendern
    renderTrashNotes();  // und speichern
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);  // Fehlender Schritt: Titel auch entfernen
    renderTrashNotes();  // Nach dem Löschen rendern und speichern
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
    } else {
        notes = [];
    }

    if(loadTitles != null){
        notesTitles = JSON.parse(loadTitles);
    } else {
        notesTitles = [];
    }

    if(loadTrashNotes != null){
        trashNotes = JSON.parse(loadTrashNotes);
    } else {
        trashNotes = [];
    }

    if(loadTrashNotesTitles != null){
        trashNotesTitles = JSON.parse(loadTrashNotesTitles);
    } else {
        trashNotesTitles = [];
    }
}
