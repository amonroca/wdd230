document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const emailInput = form.querySelector("input[type='email']");
    const modal = document.getElementById("subscription-modal");
    const closeModalButton = document.getElementById("close-modal");

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            modal.showModal();
        } else {
            alert("Please enter a valid email address.");
        }
    });

    closeModalButton.addEventListener("click", () => {
        emailInput.value = "";
        modal.close();
    });
});