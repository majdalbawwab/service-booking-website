// scripts.js

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for service cards on scroll
const services = document.querySelectorAll('.service');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('service-visible');
        } else {
            entry.target.classList.remove('service-visible');
        }
    });
}, observerOptions);

services.forEach(service => {
    observer.observe(service);
});
