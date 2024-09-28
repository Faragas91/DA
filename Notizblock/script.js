
let notes = ['banana', 'rasen mähen'];


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNoteTemplates(note);
    }
}

function getNoteTemplates(note) {
    return `<p>+ ${note}</p>`;
}





// notizen hinzulfügen
// notizien löschen
// -> notizen archivieren