// user.interface.js

// Function to store user data in localStorage
function storeUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

// Function to retrieve user data from localStorage
function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

// Function to clear user data from localStorage
function clearUserData() {
    localStorage.removeItem('user');
}

// Export functions for use in other scripts
export { storeUserData, getUserData, clearUserData };
