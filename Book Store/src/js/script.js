// Add all necessary information to the template.js to create the containers
const bookContainers = books.map((book, index) => templateContainer(book, index));
document.querySelector(".book__main-container").innerHTML = bookContainers.join("");


images = [""]

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bilder Tauschen</title>
    <style>
        img {
            width: 200px; /* Beispielgröße für die Bilder */
            height: auto;
        }
    </style>
</head>
<body>
    <img id="image1" src="bild1.jpg" alt="Bild 1">
    <img id="image2" src="bild2.jpg" alt="Bild 2">
    <button onclick="swapImages()">Bilder Tauschen</button>

    <script>
        function swapImages() {
            const img1 = document.getElementById('image1');
            const img2 = document.getElementById('image2');

            // Temporäre Speicherung des src-Werts von Bild 1
            const tempSrc = img1.src;

            // Tauschen der src-Werte
            img1.src = img2.src;
            img2.src = tempSrc;
        }
    </script>
</body>
</html>


