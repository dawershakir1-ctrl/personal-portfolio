
// Welcome message
console.log("Welcome to Dawer Shakir's Portfolio!");

// Current year in footer
const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} Dawer Shakir. All rights reserved.`;

// Navigation active effect
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(item => item.style.color = "white");
        this.style.color = "#60a5fa";
    });
});

