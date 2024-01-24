document.getElementById("subscribe-button").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput");
    var emailErrorMessage = document.getElementById("emailErrorMessage");

    // Regular expression to validate email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(emailInput.value)) {
        // Email is valid
        emailErrorMessage.textContent = "";
        alert("Thank you for subscribing!");
    } else {
        // Email is invalid
        emailErrorMessage.textContent = "Enter a valid email";
        alert(" Please enter valid email")
    }
});
