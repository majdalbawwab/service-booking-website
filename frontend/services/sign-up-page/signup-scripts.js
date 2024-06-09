// signup-scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        if (form.password.value !== form["confirm-password"].value) {
            alert("Passwords do not match!");
            return;
        }

        const formData = {
            FullName: form.name.value,
            Email: form.email.value,
            Password: form.password.value,
            PhoneNumber: form.phone.value,
            UserType: form["user-type"].value,
            ServicesProvided: Array.from(form.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value)
        };

        try {
            const response = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                alert('Sign up successful! Please log in.');
                window.location.href = '../sign-in/signin.html'; // Redirect to sign-in page after successful sign-up
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert('Fetch Error: ' + error.message);
        }
    });
});
