let promError = false;

function getPromise1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (promError) {
                reject("hat nicht so ganz funktioniert");
            }
            else {
                resolve("hat funktioniert");
            }
            }, 1000);
    });
}

function getPromise2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (promError) {
                reject("hat nicht so ganz funktioniert");
            }
            else {
                resolve("hat funktioniert");
            }
            }, 1000);
    });
}

function getPromise3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (promError) {
                reject("hat nicht so ganz funktioniert");
            }
            else {
                resolve("hat funktioniert");
            }
            }, 1000);
    });
}

async function usePromise() {
    try {
        await getPromise1();
        console.log("bla1");
        await getPromise2();
        console.log("bla2");
        await getPromise3();
        console.log("bla3");
    } catch (error) {
        console.error(error);
    }
    console.log("ende")
}