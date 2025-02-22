//for the navbar link
const modal = document.getElementById("about-modal");
const aboutLink = document.getElementById("about-link");
const closeBtn = document.querySelector(".close");

// Open modal when "About Me" link is clicked
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//for the footer link
const modal1 = document.getElementById("about-modal");
const aboutFooterLink = document.getElementById("about-footer");
const closeBtn1 = document.querySelector(".close");

// Open modal when "About Me" link in the footer is clicked
aboutFooterLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default behavior
  modal.style.display = "block"; // Open the modal
});

// Close modal when close button is clicked
closeBtn1.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal1) {
    modal.style.display = "none";
  }
});

//Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

//about me form submission
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevents page reload

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      const responseMessage = document.getElementById("response-message");

      try {
        const response = await fetch("https://formspree.io/f/xyzkvboe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          responseMessage.textContent = "Message sent successfully!";
          responseMessage.style.color = "green";
          document.getElementById("contact-form").reset();
        } else {
          responseMessage.textContent = "Failed to send message. Try again.";
          responseMessage.style.color = "red";
        }
      } catch (error) {
        responseMessage.textContent = "An error occurred. Please try again.";
        responseMessage.style.color = "red";
      } finally {
        console.log("Form submission attempt completed.");
      }
    });
});
