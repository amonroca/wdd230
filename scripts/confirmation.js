const params = new URLSearchParams(window.location.search);

const formDataContainer = document.getElementById('form-data-list');

params.forEach((value, key) => {
    const li = document.createElement('li');
    if (key.includes('password')) {
        value = '*'.repeat(value.length); // Mask the password
    }
    li.innerHTML = `<strong>${key.charAt(0).toLocaleUpperCase() + key.slice(1)}:</strong> ${value}`;
    formDataContainer.appendChild(li);
});