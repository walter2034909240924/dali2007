
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Gracias por contactarnos. Tu mensaje ha sido enviado.");
        });
    }
});
