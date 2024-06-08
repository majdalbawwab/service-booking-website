// form-scripts.js

function toggleCardDetails() {
    var paymentMethod = document.getElementById("payment-method").value;
    var cardDetails = document.getElementById("card-details");
    if (paymentMethod === "credit-card") {
        cardDetails.style.display = "block";
    } else {
        cardDetails.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date");
    const today = new Date().toISOString().split("T")[0];
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    const maxDate = nextYear.toISOString().split("T")[0];

    dateInput.setAttribute("min", today);
    dateInput.setAttribute("max", maxDate);

    // Get query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');

    // Update the heading based on the service
    const heading = document.querySelector('.booking-form h2');
    if (service) {
        heading.textContent = `Book ${service.charAt(0).toUpperCase() + service.slice(1)} Service`;
    }

    // Form submission handling
    const form = document.querySelector('.booking-form form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = {
            FullName: form.name.value,
            EmailAddress: form.email.value,
            PhoneNumber: form.phone.value,
            ServiceAddress: form.address.value,
            PreferredServiceDate: form.date.value,
            PreferredServiceTime: form.time.value,
            AdditionalDetails: form.details.value,
            ServiceID: service
        };

        try {
            const response = await fetch('http://localhost:3000/api/bookings', { // Ensure the URL matches your backend server
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const booking = await response.json();
                const queryString = new URLSearchParams(formData).toString();
                window.location.href = `bookingDetails.html?${queryString}`;
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert('Fetch Error: ' + error.message);
        }
    });
});
