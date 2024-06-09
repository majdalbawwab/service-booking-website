// scripts.js

import { getUserData, clearUserData } from './user.interface.js';

// document.addEventListener("DOMContentLoaded", function() {
//     // Retrieve user data from localStorage
//     const user = getUserData();
//
//     if (user) {
//         if (user.UserType === 'user') {
//             document.getElementById('user-services').style.display = 'block';
//         } else if (user.UserType === 'provider') {
//             document.getElementById('profile-tab').style.display = 'inline';
//         }
//     } else {
//         // Redirect to sign-in page if no user data is found
//         window.location.href = 'sign-in/signin.html';
//     }
//
//     // Log out functionality
//     document.getElementById('logout-button').addEventListener('click', function() {
//         clearUserData();
//         window.location.href = 'sign-in/signin.html';
//     });
// });
//
//
// // Smooth scroll for internal links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

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
