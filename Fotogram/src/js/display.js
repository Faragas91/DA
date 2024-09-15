let allImages = document.getElementsByClassName("picture__images");
let overlay = document.getElementById("overlay");
let currentIndex = 0;
makeBigger = true; 

for (let i = 0; i < allImages.length; i++) {
    let image = allImages[i];
    image.addEventListener('click', (event) => {
      if (makeBigger) {
        // Hide all images and overlay
        hideImage();
        // Enlarge the clicked image
        biggerImage(image);
        // Update current index
        currentIndex = i;
        makeBigger = false;
      } 
    });
  }


// Function to bigger the image
function biggerImage(image) {
    image.style.display = 'flex';
    image.classList.add("image-enlarged");
    image.style.zIndex = "100";
    overlay.style.display = "block";

    const nextButtonRight = document.createElement("img");
    nextButtonRight.src = "../../material_symbols/arrow_right.png";
    nextButtonRight.className = "next__button-right";
    nextButtonRight.style.zIndex = "100";

    image.parentNode.appendChild(nextButtonRight)

    nextButtonRight.addEventListener("click", () => {
        image.style.display = "none";
        nextImageRight();
    });

    const nextButtonLeft = document.createElement("img");
    nextButtonLeft.src = "../../material_symbols/arrow_left.png";
    nextButtonLeft.className = "next__button-left";
    nextButtonLeft.style.zIndex = "100";

    image.parentNode.appendChild(nextButtonLeft)

    nextButtonLeft.addEventListener("click", () => {
        image.style.display = "none";
        nextImageLeft();

    });

    const closeButton = document.createElement("img");
    closeButton.src = "../../material_symbols/arrow_left.png";
    closeButton.className = "close__button";
    closeButton.style.zIndex = "100";

    closeButton.addEventListener("click", () => {
      image.style.display = "none";
      console.log("Funktioniert");

      
  });
}
// // Function to set the image to the normal settings
// function normalizeImage(image) {
//     image.style.display = "block";
//     image.classList.add("image-normalized");
//     image.style.zIndex = "0";
//     overlay.style.display = "none";
//     nextButtonLeft.style.display = "none";
// }   

// Hide all pictures and the overlay
function hideImage() {
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].style.display = "none";
    }
    overlay.style.display = "none";
}

// function showAllImage() {
//     for (let i = 0; i < allImages.length; i++) {
//       allImages[i].style.display = "flex";
//     }
//     overlay.style.display = "none";
// }


function nextImageRight() {
    currentIndex++;
    if (currentIndex >= allImages.length) {
      currentIndex = 0;
    }
    const nextImage = allImages[currentIndex];
    biggerImage(nextImage);
}

function nextImageLeft() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = allImages.length -1;
    }
    const nextImage = allImages[currentIndex];
    biggerImage(nextImage);
}

// Function to toggle the overlay
function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_on");
}










// else {
//   // Show all images and overlay
//   showAllImage();
//   // Reset the image to its original size
//   normalizeImage(image);
//   makeBigger = true;
// }