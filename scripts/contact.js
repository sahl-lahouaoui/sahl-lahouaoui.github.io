(function () {
    emailjs.init({
        publicKey: "aREtvPgmDZkxOyQSJ",
    });
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.website.value.trim() !== "") {
    return;
}

    
    emailjs
        .sendForm(
            "service_2pdjr0m",
            "template_yaom5pe",
            form
        )
        .then(function () {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch(function (error) {
            console.error("EmailJS ERROR:", error);
            alert("Something went wrong. Please try again.");
        });
});

