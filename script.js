document.addEventListener('DOMContentLoaded', () => {
    // Create star background
    createStarryBackground();

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact form submission handler
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill out all fields');
            return;
        }

        // In a real-world scenario, you would send this data to a backend service
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Simple typing effect for hero subtitle
    const subtitleElement = document.querySelector('.subtitle');
    const subtitleText = subtitleElement.textContent;
    subtitleElement.textContent = '';

    let charIndex = 0;
    function typeWriter() {
        if (charIndex < subtitleText.length) {
            subtitleElement.textContent += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Add hover effect to project cards with parallax
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width - 0.5) * 20;
            const yPercent = (y / rect.height - 0.5) * 20;
            
            card.style.transform = `perspective(1000px) rotateX(${-yPercent}deg) rotateY(${xPercent}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
});

// Function to create starry background
function createStarryBackground() {
    const container = document.querySelector('.container');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: fixed;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: white;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random()};
            animation: twinkle ${Math.random() * 5 + 3}s infinite;
            z-index: -1;
        `;
        container.appendChild(star);
    }
}
