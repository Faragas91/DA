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
        window.location.href = "../views/mail_sent.html";
    }).catch((error) => {
        console.log(error);
    });
}