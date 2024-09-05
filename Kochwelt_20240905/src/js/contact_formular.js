function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xdknlyaw", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        // Hier muss noch die Varibale getauscht werden
    }).catch((error) => {
        console.log(error);
    });
}