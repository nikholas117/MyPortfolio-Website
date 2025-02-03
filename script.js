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
