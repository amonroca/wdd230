document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    const now = new Date();

    const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const formattedTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

    timestampField.value = `${formattedDate} at ${formattedTime}`;
});