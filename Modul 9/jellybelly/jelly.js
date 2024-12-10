let responseJson;

async function jellyDataJson() {
    try {
        const response = await fetch('db.json');
        if (!response.ok) {
            console.log('Die Anfrage war nicht erfolgreich.');
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Daten wurden erfolgreich abgerufen.');
        responseJson = await response.json(); 
        return responseJson;
    } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
        responseJson = null; 
    }
}

jellyDataJson().then((data) => {
    if (data) {
        console.log('TotalCount:', data.totalCount);
        const contentDiv = document.getElementById('content'); 
        contentDiv.innerHTML = "Total Count: " + data.totalCount;
        contentDiv.innerHTML = "Items: " + data.items[0].groupName[1];
    }
});