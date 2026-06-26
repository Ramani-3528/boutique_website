(function () {
    emailjs.init("zyiLu_7HAGWwrraWc");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const statusMessage = document.getElementById("statusMessage");

    emailjs.send("service_5jpzp1g", "template_4oik976", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value
    })
    .then(function () {

        statusMessage.textContent = "Thanks for reaching out — I'll get back to you soon!";
        statusMessage.classList.remove("error");
        statusMessage.classList.add("show");

        document.getElementById("contactForm").reset();

        setTimeout(() => {
            statusMessage.classList.remove("show");
            statusMessage.textContent = "";
        }, 5000);

    })
    .catch(function (error) {

        statusMessage.textContent = "Failed to send message. Please try again.";
        statusMessage.classList.remove("show");
        statusMessage.classList.add("error", "show");

        console.log(error);

        setTimeout(() => {
            statusMessage.classList.remove("show", "error");
            statusMessage.textContent = "";
        }, 5000);
    });
});