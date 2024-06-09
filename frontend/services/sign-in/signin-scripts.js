// signin-scripts.js

import { storeUserData } from '../user.interface.js';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signin-form");

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = {
            Identifier: form.identifier.value,
            Password: form.password.value,
        };

        try {
            const response = await fetch('http://localhost:3000/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();

                // Store user data using user.interface.js
                storeUserData(result.user);

                alert('Sign in successful!');
                window.location.href = '../../index.html'; // Redirect to index.html after successful sign-in
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert('Fetch Error: ' + error.message);
        }
    });
});
