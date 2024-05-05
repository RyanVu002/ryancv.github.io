// State tracking for each carousel's current slide
let currentSlide = {
    carousel1: 0,
    carousel2: 0,
    carousel3: 0,
    carousel4: 0
};

// Function to show the specified slide for a given carousel
function showSlides(carouselId, slideIndex) {
    let slides = document.getElementsByClassName(carouselId);

    // Ensure the slide index wraps around properly
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides and show the desired one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

    return slideIndex;
}

// Function to navigate through slides in a specific carousel
function plusDivs(carouselKey, increment) {
    currentSlide[carouselKey] = showSlides(carouselKey, currentSlide[carouselKey] + increment);
}

// Initialize all carousels on page load
window.onload = function() {
    showSlides('carousel1', currentSlide.carousel1);
    showSlides('carousel2', currentSlide.carousel2);
    showSlides('carousel3', currentSlide.carousel3);
    showSlides('carousel4', currentSlide.carousel4);
};