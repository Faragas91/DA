// DOMContentLoaded ist dafür zuständig, dass das Script erst ausgeführt wird wenn das HTML Document vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() { 

    // Der Butten mit der id portionButton wird als calculateButton declariert
    let calculateButton = document.getElementById("portionButton");

    // Wenn der calculateButton geklickt wird, wird die Funktion ausgeführt
    calculateButton.addEventListener("click", function() {

        // Der Aktuelle Wert von dem Input von portionInput wird herausgenommen und in die inputelement Variable gespeichert
        // parseInt wandelt den String in ein Integer um, damit dieser weiter verarbeitet werden kann
        let inputElement = parseInt(document.getElementById("portionInput").value);
        console.log(inputElement);

        // Überprüfen, ob der Wert innerhalb des erlaubten Bereichs (1 bis 20) liegt, wenn nicht wird eine Fehlermeldung ausgegeben
        if (inputElement <= 0 || inputElement >= 20) {
            alert("Bitte geben Sie eine Zahl zwischen 1 und 20 ein.");
            return;
        } else {

        // Mit querySelectorAll werden alle Elemente mit der classe tablePortion herausgesucht und in die tablePortions Variable gespeichert
        let tablePortions = document.querySelectorAll(".tablePortion");
        console.log(tablePortions)
        
        // Für jedes td Element in der tablePortions letiable wird der Inhalt mit dem aktuellen Input multipliziert und in den TextContent geschrieben
        tablePortions.forEach(function(td) {

            // Der Originalwert wird aus dem data-original-value Attribut geholt oder falls keines vorhanden, aus dem TextContent
            let originalValue = parseFloat(td.dataset.originalValue) || parseFloat(td.textContent);
            console.log(originalValue)

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