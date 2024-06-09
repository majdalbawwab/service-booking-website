document.addEventListener('DOMContentLoaded', function() {
    const notificationList = document.getElementById('notificationList');
    
    // Simulate fetching notifications from a server
    const notifications = [
        { id: 1, name: 'John Doe', phone: '123-456-7890', date: '2024-06-10 14:00', address: '123 Main St',  message: 'requested your service.' },
        { id: 2, name: 'Jane Smith', phone: '098-765-4321', date: '2024-06-11 09:30', address: '456 Elm St', message: 'requested your service.' },
        // Add more user requests here
        { id: 3, name: 'Alice Johnson', phone: '111-222-3333', date: '2024-06-12 16:45', address: '789 Oak St', message: 'requested your service.' },
        { id: 4, name: 'Bob Brown', phone: '444-555-6666', date: '2024-06-13 11:00', address: '101 Pine St', message: 'requested your service.' }
    ];

    // Insert notifications into the DOM
    notificationList.innerHTML = notifications.map(notification => `
        <div class="notification" data-id="${notification.id}">
            <p><strong>User Name:</strong> ${notification.name}</p>
            <p><strong>Phone Number:</strong> ${notification.phone}</p>
            <p><strong>Date and Time:</strong> ${notification.date}</p>
            <p><strong>Address:</strong> ${notification.address}</p>
            <p>${notification.message}</p>
            <button class="accept">Accept</button>
            <button class="reject">Reject</button>
        </div>
    `).join('');

    // Add event listeners for the Accept and Reject buttons
    document.querySelectorAll('.notification button.accept').forEach(button => {
        button.addEventListener('click', function() {
            const notificationId = this.parentElement.dataset.id;
            // Handle accept logic here
            alert(`Accepted notification ${notificationId}`);
            this.parentElement.remove();
        });
    });

    document.querySelectorAll('.notification button.reject').forEach(button => {
        button.addEventListener('click', function() {
            const notificationId = this.parentElement.dataset.id;
            // Handle reject logic here
            alert(`Rejected notification ${notificationId}`);
            this.parentElement.remove();
        });
    });
});
