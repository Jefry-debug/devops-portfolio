const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace the placeholder LinkedIn URL before publishing.
document.getElementById("linkedinLink").addEventListener("click", (event) => {
  if (event.currentTarget.getAttribute("href") === "#") {
    event.preventDefault();
    alert("Replace the LinkedIn # link in index.html with your LinkedIn profile URL.");
  }
});
