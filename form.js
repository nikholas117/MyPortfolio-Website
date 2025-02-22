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
