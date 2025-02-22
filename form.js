// Handle the About Me form submission
const contactFormAbout = document.getElementById("contact-form-about");
const responseMessageAbout = document.getElementById("response-message");

contactFormAbout.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("https://formspree.io/f/xyzkvboe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      responseMessageAbout.textContent = "Message sent successfully!";
      contactFormAbout.reset();
    } else {
      responseMessageAbout.textContent = "Failed to send message. Try again.";
    }
  } catch (error) {
    responseMessageAbout.textContent = "An error occurred. Please try again.";
  }
});

//for contact form
document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    try {
      const response = await fetch("https://getform.io/f/bpjnnydb", {
        method: "POST",
        body: formData,
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
