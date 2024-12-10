async function fetchDataJson() {
    let response = await fetch('db.json');
    let responseJson = await response.json();
    console.log(responseJson);
}

async function fetchDataText() {
    let response = await fetch('h1.txt');
    let responseText = await response.text();
    document.getElementById('content').innerHTML = responseText
}