const images = [
    'chole.png', // First image
    'rasmalai.png',  // Second image
    'pasta.png',  // Third image
    'pizza.png', // Fourth image
    'burger.png', // Fifth image
    'chole.png'  // First image
];

// Initial image index
let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to change the image with transition effect
function changeImage(newIndex) {
    // Add fade-out class for the current image
    imageElement.classList.add('fade-out');
    
    // Wait for the fade-out transition to complete before changing the image
    setTimeout(() => {
        // Update the image source
        imageElement.src = images[newIndex];

        // Remove fade-out class and add fade-in class for the new image
        imageElement.classList.remove('fade-out');
        imageElement.classList.add('fade-in');
    }, 500); // Matches the transition duration in CSS (0.5 seconds)
}

// Event listener for the next (right) button
nextBtn.addEventListener('click', () => {
    currentIndex++;
    
    // If we've reached the end of the array, loop back to the first image
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    changeImage(currentIndex);
});

// Event listener for the previous (left) button
prevBtn.addEventListener('click', () => {
    currentIndex--;

    // If we've reached the beginning of the array, loop back to the last image
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    changeImage(currentIndex);
});