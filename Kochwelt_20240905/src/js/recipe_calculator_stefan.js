// DOMContentLoaded ist dafür zuständig, dass das Script erst ausgeführt wird wenn das HTML Document vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() { 

    // Der Butten mit der id portionButton wird als calculateButton declariert
    let calculateButton = document.getElementById("portionButton");

    // Ursprünglicher Wert des Input-Felds speichern
    let originalInputValue = parseInt(document.getElementById("portionInput").value);

    // Wenn der calculateButton geklickt wird, wird die Funktion ausgeführt
    calculateButton.addEventListener("click", function() {

        // Der Aktuelle Wert von dem Input von portionInput wird herausgenommen und in die inputelement Variable gespeichert
        // parseInt wandelt den String in ein Integer um, damit dieser weiter verarbeitet werden kann
        let inputElement = parseInt(document.getElementById("portionInput").value);

        // Überprüfen, ob der Wert innerhalb des erlaubten Bereichs (1 bis 20) liegt, wenn nicht wird eine Fehlermeldung ausgegeben
        if (isNaN(inputElement)) {
            alert("Bitte geben Sie eine gültige Zahl ein.");
            return;
        }

        if (inputElement <= 0 || inputElement > 20) {
            alert("Bitte geben Sie eine Zahl zwischen 1 und 20 ein.");
            document.getElementById("portionInput").value = originalInputValue;
            return;
        } else {

        originalInputValue = inputElement;

        // Mit querySelectorAll werden alle Elemente mit der classe tablePortion herausgesucht und in die tablePortions Variable gespeichert
        let tablePortions = document.querySelectorAll(".tablePortion");
        
        // Für jedes td Element in der tablePortions letiable wird der Inhalt mit dem aktuellen Input multipliziert und in den TextContent geschrieben
        tablePortions.forEach(function(td) {

            // Der Originalwert wird aus dem data-original-value Attribut geholt oder falls keines vorhanden, aus dem TextContent
            let originalValue = parseFloat(td.dataset.originalValue) || parseFloat(td.textContent);

            let result = originalValue * inputElement;

            // Der Berechnete Wert wird als neuer Textinhalt des aktuellen td-Elements gesetzt. Die Tabellenzelle zeigt den neuen berechneten Wert an
            td.textContent = result;

            // Der data-original-value Attribut wird mit dem Originalwert des Elements gesetzt, damit dieser wiederhergestellt werden kann
            // Dadurch wird sichergestellt, dass bei jeder Berechnung vom Originalwert ausgerechnet wird und nicht von dem angepassten Wert
            td.dataset.originalValue = originalValue;
            });
        };
    });
});