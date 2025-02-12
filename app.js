document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    if (!galleryContainer) return;

    const images = galleryContainer.querySelectorAll('.gallery-img');
    const prevBtn = galleryContainer.querySelector('.prev');
    const nextBtn = galleryContainer.querySelector('.next');
    const dotsContainer = galleryContainer.querySelector('.gallery-dots');
    
    let currentIndex = 0;

    // Create dots
    images.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        images[currentIndex].classList.remove('active');
        dotsContainer.children[currentIndex].classList.remove('active');
        currentIndex = index;
        images[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % images.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + images.length) % images.length);
    }

    prevBtn?.addEventListener('click', prevSlide);
    nextBtn?.addEventListener('click', nextSlide);
});