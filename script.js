// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send these values to a server
    // For now, just show an alert
    alert(`Thank you ${name} for your message! I will get back to you soon.`);
    contactForm.reset();
});

// Add scroll animation for skill cards
const skillCards = document.querySelectorAll('.skill-card');

// Initialize all skill cards with 0 opacity
skillCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Scroll animation function
window.addEventListener('scroll', function() {
    skillCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});

// Add scroll animation for project cards
const projectCards = document.querySelectorAll('.project-card');

// Initialize animations when document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Trigger initial scroll check for elements that might be in view
    window.dispatchEvent(new Event('scroll'));
});