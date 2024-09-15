let allImages = document.getElementsByClassName("picture__images");
let overlay = document.getElementById("overlay");
let currentIndex = 0;

for (let i = 0; i < allImages.length; i++) {
    let image = allImages[i];
    image.addEventListener('click', (event) => {
        // Hide all images and overlay
        hideImage();
        // Enlarge the clicked image
        biggerImage(image);
        // Update current index
        currentIndex = i;
    });
  }


// Function to bigger the image
function biggerImage(image) {
    image.style.display = 'flex';
    image.classList.add("image-enlarged");
    image.style.zIndex = "100";
    overlay.style.display = "block";

    // Create the button on the right side
    const nextButtonRight = document.createElement("img");
    nextButtonRight.src = "../../material_symbols/arrow_right.png";
    nextButtonRight.className = "next__button-right";
    nextButtonRight.style.zIndex = "100";

    image.parentNode.appendChild(nextButtonRight)

    // Listener acts when the next button is clicked
    nextButtonRight.addEventListener("click", () => {
        image.classList.remove("image-enlarged"); 
        image.classList.add("picture__image");
        image.style.display = "none";
        image.parentNode.removeChild(nextButtonRight);
        image.parentNode.removeChild(nextButtonLeft);
        image.parentNode.removeChild(closeButton);
        nextImageRight();
    });

    // Create the button on the left side
    const nextButtonLeft = document.createElement("img");
    nextButtonLeft.src = "../../material_symbols/arrow_left.png";
    nextButtonLeft.className = "next__button-left";
    nextButtonLeft.style.zIndex = "100";

    image.parentNode.appendChild(nextButtonLeft)

    // Listener acts when the previous button is clicked
    nextButtonLeft.addEventListener("click", () => {
        image.classList.remove("image-enlarged"); 
        image.classList.add("picture__image");
        image.style.display = "none";
        image.parentNode.removeChild(nextButtonRight);
        image.parentNode.removeChild(nextButtonLeft);
        image.parentNode.removeChild(closeButton);
        nextImageLeft();

    });

    // Create the close button on the top right corner
    const closeButton = document.createElement("img");
    closeButton.src = "../../material_symbols/close.png";
    closeButton.className = "close__button";
    closeButton.style.zIndex = "100";

    image.parentNode.appendChild(closeButton);

    // Listener acts when the close button is clicked
    closeButton.addEventListener("click", () => {
      image.classList.remove("image-enlarged");
      showAllImage();
      image.parentNode.removeChild(nextButtonRight);
      image.parentNode.removeChild(nextButtonLeft);
      image.parentNode.removeChild(closeButton);
  });
}

// Hide all pictures and the overlay
function hideImage() {
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].style.display = "none";
    }
    overlay.style.display = "none";
}

// Show all pictures again after the overlay is closed
function showAllImage() {
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].style.display = "flex";
      allImages[i].classList.add("picture__images");
    }
    overlay.style.display = "none";
}

// Function to navigate to the next image when the "next" button is clicked
function nextImageRight() {
    currentIndex++;
    if (currentIndex >= allImages.length) {
      currentIndex = 0;
    }
    const nextImage = allImages[currentIndex];
    biggerImage(nextImage);   
}

// Function to navigate to the previous image when the "previous" button is clicked
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