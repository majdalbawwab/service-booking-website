document.addEventListener('DOMContentLoaded', function() {
    const bookingList = document.getElementById('bookingList');

    // Simulate fetching accepted bookings from a server
    const acceptedBookings = [
        { id: 1, name: 'John Doe', phone: '123-456-7890', date: '2024-06-10 14:00', address: '123 Main St'  },
        { id: 2, name: 'Jane Smith', phone: '098-765-4321', date: '2024-06-11 09:30', address: '456 Elm St', },
        // Add more accepted bookings here
    ];

    // Insert accepted bookings into the DOM
    bookingList.innerHTML = acceptedBookings.map(booking => `
        <div class="booking" data-id="${booking.id}">
            <p><strong>User Name:</strong> ${booking.name}</p>
            <p><strong>Phone Number:</strong> ${booking.phone}</p>
            <p><strong>Date and Time:</strong> ${booking.date}</p>
            <p><strong>Address:</strong> ${booking.address}</p>
        </div>
    `).join('');
});
