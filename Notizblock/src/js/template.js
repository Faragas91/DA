function getNoteTemplates(indexNote) {
    return `<div>
        <p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="pushToTrash(${indexNote})">X</button></p>;
        </div>`
}

function getTrashNoteTemplates(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button><button onclick="fromTrashToNote(${indexTrashNote})">J</button></p>`;
}