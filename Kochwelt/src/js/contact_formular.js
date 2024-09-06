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
        alert("Ihre Nachricht wurde erfolgreich versendet!");
        event.target.reset();
    }).catch((error) => {
        alert("Ihre Nachricht konnte nicht erfolgreich versendet werden!");
        console.log(error);
        event.target.reset();
    });
}