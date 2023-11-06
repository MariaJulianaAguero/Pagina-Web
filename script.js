const images = [
    'baa1.png',
    'baa2.png',
    'baa3.png',
    
];

let currentImageIndex = 0;
const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateImage() {
    imageElement.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

updateImage();




