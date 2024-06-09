document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('price', document.getElementById('price').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('profilePicture', document.getElementById('profilePicture').files[0]);

    fetch('/api/saveProfile', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Profile saved successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error saving your profile.');
    });
});
