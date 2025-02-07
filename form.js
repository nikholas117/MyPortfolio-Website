document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("https://formspree.io/f/manqbblz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        document.getElementById("response-message").textContent =
          "Message sent successfully!";
        document.getElementById("contact-form").reset();
      } else {
        document.getElementById("response-message").textContent =
          "Failed to send message. Try again.";
      }
    } catch (error) {
      document.getElementById("response-message").textContent =
        "An error occurred. Please try again.";
    }
  });
