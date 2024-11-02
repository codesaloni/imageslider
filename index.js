const images = [
    "https://miro.medium.com/max/1200/1*SeUxbNo-X_FYt4dwPZ81Sw.jpeg",
    "https://darter.in/wp-content/uploads/2014/04/ladakh-winter-19.jpg",
    "https://www.oyorooms.com/blog/wp-content/uploads/2017/11/Feature-Image-min-12.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.yX_Fgw7UpgiqEgc-VPCfZwHaEH&pid=Api&P=0&h=180",
    "https://irisholidays.com/keralatourism/wp-content/uploads/2018/12/trivandrum.jpg"
];

let currentIndex = 0; // Initialize the current index to 0
const itemsPerPage = 1; // Number of images to display at a time
let autoSlideInterval; // Variable to hold the interval function

// Function to update the displayed images
function updateImages() {
    const container = document.getElementById('image-container'); 
    container.innerHTML = ''; 

    for (let i = 0; i < itemsPerPage; i++) {
        const index = (currentIndex + i) % images.length; // Get the current image index
        const imgElement = document.createElement('img'); // Create a new image element
        imgElement.src = images[index]; // Set the image source
        imgElement.className = 'slider-img'; // Set the class for styling
        container.appendChild(imgElement); // Append the image to the container
    }
}

// Function to move to the next set of images
function nextSlide() {
    currentIndex = (currentIndex + itemsPerPage) % images.length; // Move to the next set of images
    updateImages(); // Update the displayed images
}

// Function to move to the previous set of images
function prevSlide() {
    currentIndex = (currentIndex - itemsPerPage + images.length) % images.length; // Move to the previous set of images
    updateImages(); // Update the displayed images
}

// Function to automatically slide images every 5 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Automatically move to the next slide every 5 seconds
}

// Function to stop automatic sliding (on hover or click)
function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the interval to stop auto sliding
}

// Event listener for the "Next" button
document.querySelector('.next').addEventListener('click', function() {
    stopAutoSlide(); // Stop the auto slide when the button is clicked
    nextSlide(); // Move to the next set of images
    startAutoSlide(); // Restart the auto slide after manual click
});

// Event listener for the "Previous" button
document.querySelector('.prev').addEventListener('click', function() {
    stopAutoSlide(); 
    prevSlide(); 
    startAutoSlide(); 
});

// Start the automatic sliding when the page loads
updateImages(); // Load  imagies
startAutoSlide(); // Start sliding

// Optional: Pause auto-slide on hover
document.querySelector('.container-fluid').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.container-fluid').addEventListener('mouseleave', startAutoSlide);
