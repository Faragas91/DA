// function onloadFunc() {
//     console.log("test");
//     // loadData("/name");
//     // postData("/name", {"banana": true});
//     // deleteData("/name/-ODpx6GOVrMrRpd_hP_E");
//     putData("/name", {"name": "haha"});
// }

const BASE_URL = "https://remotestorage-23b07-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData(path="") {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json();
}

async function postData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


async function deleteData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json", {
        method: "DELETE",
    });
    return responseToJson = await response.json();
}

async function putData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}
