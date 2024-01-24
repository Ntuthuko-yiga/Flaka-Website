
let calcScrollValue = () => {
  let rocket = document.getElementById("rocket");
  let rocketValue = document.getElementById("rocket-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  if (pos > 100) {
    rocket.style.display = "grid";
  } else {
    rocket.style.display = "none";
  }

  rocket.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  let scrollValue = Math.round((pos * 100) / calcHeight);
  rocketValue.className = "";
  setTimeout(() => {
    rocketValue.className = "filled";
  }, 0);

  rocketValue.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// ChatBot Functionality

          // ChatBot/Iframe
          document.addEventListener("DOMContentLoaded", function () {
            // Get references to the icon and iframe elements
             var openIframeIcon = document.getElementById("open-iframe-icon");
             var iframeContainer = document.getElementById("iframe-container");
             var myIframe = document.getElementById("my-iframe");
                   
           // Set the source URL of the iframe
             myIframe.src = "https://console.dialogflow.com/api-client/demo/embedded/9b1bc75d-9724-4d18-80aa-37ee55d24133";
             openIframeIcon.addEventListener("click", function () {
            // Toggle the visibility of the iframe container
             if (iframeContainer.style.display === "none") {
             iframeContainer.style.display = "block";
             } else {
             iframeContainer.style.display = "none";
                }
              });
            });



// Form Validation

document.getElementById("submitBtn").addEventListener("click", function () {
  // Reset error messages and styles
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((element) => (element.textContent = ""));
  const formFields = document.querySelectorAll(".form-field");
  formFields.forEach((field) => field.classList.remove("error"));

  // Validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value.trim();
  const time = document.getElementById("time").value.trim();

  let valid = true;

  // Name validation: Should not contain numbers
  if (name === "" || /\d/.test(name)) {
      document.getElementById("nameError").textContent = "Please enter a valid name without numbers";
      document.getElementById("name").classList.add("error");
      valid = false;
  }

  // Email validation: Should contain "@" and a domain
  if (email === "" || !email.includes("@")) {
      document.getElementById("emailError").textContent = "Please enter a valid email address";
      document.getElementById("email").classList.add("error");
      valid = false;
  }

  // Date validation: Should be in "yyyy/mm/dd" format
  if (date === "") {
          document.getElementById("dateError").textContent = "Please select a date";
          document.getElementById("date").classList.add("error");
          valid = false;
      }

  if (time === "") {
      document.getElementById("timeError").textContent = "Please select a time";
      document.getElementById("time").classList.add("error");
      valid = false;
  }

  if (valid) {
      // Form is valid, you can submit the form here
      // Replace this part with your form submission logic
      alert("Table successfully booked, our team will get back to you soon");

      // Clear the form after successful submission
      document.getElementById("bookingForm").reset();
  }
});

function sendMail() {
  // Validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value.trim();
  const time = document.getElementById("time").value.trim();

  let valid = true;

  // Name validation: Should not contain numbers
  if (name === "" || /\d/.test(name)) {
    document.getElementById("nameError").textContent = "Please enter a valid name without numbers";
    document.getElementById("name").classList.add("error");
    valid = false;
  }

  // Email validation: Should contain "@" and a domain
  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").textContent = "Please enter a valid email address";
    document.getElementById("email").classList.add("error");
    valid = false;
  }

  // Check if validation is successful before sending the email
  if (valid) {
    emailjs.send("service_xy88u8k", "template_5649chj", {
      name: name,
      email: email,
      date: date,
      time: time,
      guests: document.getElementById("guests").value
    })
    .then(function(response) {
      console.log("Sent successfully: " + response.text);
      // alert("Email sent successfully!"); // Show an alert on success
    }, function(error) {
      console.log("Failed to send email: " + error.text);
      alert("Failed to send email. Please try again."); // Show an alert on failure
    });
  } else {
    // Display a message or take some action indicating that the form has validation errors
    console.log("Email not sent due to validation errors");
  }
}