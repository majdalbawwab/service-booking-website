// bookingDetails.js

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("fullName").textContent = urlParams.get('FullName');
    document.getElementById("emailAddress").textContent = urlParams.get('EmailAddress');
    document.getElementById("phoneNumber").textContent = urlParams.get('PhoneNumber');
    document.getElementById("serviceAddress").textContent = urlParams.get('ServiceAddress');
    document.getElementById("preferredServiceDate").textContent = urlParams.get('PreferredServiceDate');
    document.getElementById("preferredServiceTime").textContent = urlParams.get('PreferredServiceTime');
    document.getElementById("additionalDetails").textContent = urlParams.get('AdditionalDetails');
});
