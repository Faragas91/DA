let allImages = document.getElementsByClassName("picture__images");
let overlay = document.getElementById("overlay");

// Funktion zur Vergrößerung eines Bildes
function biggerImage(image) {
    image.style.display = "block";
    image.style.transform = "scale(1.05)"
    overlay.style.display = "block"; // Zeige das Overlay
}

// Funktion zum Wechseln des Bildes
function hideImage(imageId) {
    // Verstecke alle Bilder und das Overlay
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].style.display = "none";
        allImages[i].style.height = "200px";
        allImages[i].style.width = "200px";
    }
    overlay.style.display = "none"; // Verstecke das Overlay
    return 0;
}



function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
}





// function showImage() {
//     let imageFound = false;

//     for (let i = 0; i < allImages.length; i++) {
//         let image = allImages[i];
//         if (image.id === imageId) {
//             biggerImage(image);
//             imageFound = true;
//             break; // Stoppe die Schleife, wenn das Bild gefunden wurde
//         }
//     }

//     if (!imageFound) {
//         console.log("Bild mit ID '" + imageId + "' nicht gefunden");
//     }
// }


