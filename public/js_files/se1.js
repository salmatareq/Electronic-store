document.addEventListener('DOMContentLoaded', function() {
    const dots = document.getElementById('dots');
    const letters = document.querySelectorAll('.letter');
    const tagline = document.getElementById('tagline');
    const namesContainer = document.getElementById('names');
    const names = document.querySelectorAll('.name');
    const particlesContainer = document.getElementById('particles');
    
    // Create floating particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Continuous loading dots animation
    let dotCount = 0;
    const dotInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dots.textContent = '.'.repeat(dotCount);
    }, 300);
    
    // Show letters with stylish animation
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('visible');
        }, index * 400);
    });
    
    // Show tagline after letters
    setTimeout(() => {
        tagline.classList.add('visible');
    }, 2500);
    
    // Show names container
    setTimeout(() => {
        namesContainer.classList.add('visible');
        
        // Show names one by one in reverse order
        names.forEach((name, index) => {
            setTimeout(() => {
                name.classList.add('visible');
            }, index * 300);
        });
    }, 3000);
});
