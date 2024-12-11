let users = [];
const BASE_URL = "https://remotestorage-23b07-default-rtdb.europe-west1.firebasedatabase.app/";

async function onloadFunc() {

    let userResponse = await getAllUsers("namen");

    let userKeysArray = Object.keys(userResponse);

    for (let i = 0; i < userKeysArray.length; i++) {
        users.push(
            {
                id: userKeysArray[i],
                user: userResponse[userKeysArray[i]],
            }
        )
    }

    console.log(users);
    
    await addEditSingleUser(users[2].id, users[4].user);
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

async function addEditSingleUser(id=11, user={name: 'Sabrina'}) {
    putData(`namen/${id}`, user);
}

async function getAllUsers(path) {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json();
}