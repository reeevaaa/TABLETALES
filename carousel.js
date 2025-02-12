document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const images = carousel.querySelectorAll('img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;

    // Create dots
    images.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dots.appendChild(dot);
    });

    function goToSlide(index) {
        images[currentIndex].classList.remove('active');
        dots.children[currentIndex].classList.remove('active');
        currentIndex = index;
        images[currentIndex].classList.add('active');
        dots.children[currentIndex].classList.add('active');
    }

    function nextSlide() {
        const next = (currentIndex + 1) % images.length;
        goToSlide(next);
    }

    function prevSlide() {
        const prev = (currentIndex - 1 + images.length) % images.length;
        goToSlide(prev);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});
