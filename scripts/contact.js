function sendMessage()
{
    const serviceID = "service_2pdjr0m";
    const templateID = "template_yaom5pe";

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        reason: document.getElementById("reason").value,
        message: document.getElementById("message").value,
        privacy_consent: document.getElementById("privacy_consent").value,
    }

    emailjs.send(serviceID, templateID, params)
    .then(response => console.log("SUCCESS:" + response.status))
    .catch(error => console.log("ERROR:", error))
}