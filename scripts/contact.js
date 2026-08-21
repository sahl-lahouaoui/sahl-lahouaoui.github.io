(function () {
    emailjs.init({
        publicKey: 'aREtvPgmDZkxOyQSJ',
    });
})();

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs
        .sendForm('service_2pdjr0m', 'template_yaom5pe', form)
        .then(() => {
            alert('Message sent successfully!');
            form.reset();
        })
        .catch((error) => {
            console.error('EmailJS error:', error);

            alert('Error: ' + (error.text || error.message || JSON.stringify(error)));
        });
});
