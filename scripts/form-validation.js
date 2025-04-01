// Update the rating value dynamically
function updateRating(value) {
    document.getElementById('rating-value').textContent = value;
}

// Validate password confirmation
const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        alert('Passwords do not match. Please try again.');
        password.value = '';
        confirmPassword.value = '';
        password.focus();
    }
});

form.addEventListener('submit', (e) => {
    // Validate email format (only byui.edu domain)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    if (!emailPattern.test(email.value)) {
        e.preventDefault(); // Prevent form submission
        // Clear the email field and focus on it
        alert('Please enter a valid email address from the byui.edu domain.');
        email.focus();
    }
});

