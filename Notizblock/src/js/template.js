function getNoteTemplates(indexNote) {
    return `
        <div class="note">
            <p class="note__task-title"> ${notesTitles[indexNote]}</p>
            <p class="note__task-description"> ${notes[indexNote]}</p>
            <div>
                <button onclick="pushToTrash(${indexNote})">
                    <img class="icons" src="./assets/icons/delete.png" alt="delete" >
                </button>
            </div>
        </div>`;
}

function getTrashNoteTemplates(indexTrashNote) {
    return `
        <div class="note">
            <p class="note__task-title"> ${trashNotesTitles[indexTrashNote]}</p>
            <p class="note__task-description"> ${trashNotes[indexTrashNote]}</p>
            <div>
                <button onclick="deleteNote(${indexTrashNote})">
                    <img class="icons" src="./assets/icons/delete.png" alt="delete" >
                </button>
                <button onclick="fromTrashToNote(${indexTrashNote})">
                    <img class="icons" src="./assets/icons/restore_from_trash.png" alt="delete" >
                </button>
            </div>
        </div>`;
}