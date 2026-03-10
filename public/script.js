const nicknames = [
  "My Baby ❤️",
  "My Babu 💕",
  "Sweetheart 💖",
  "My Queen 👑",
  "My Angel 😇",
  "My Sunshine ☀️"
];

const quotes = [
  "Every moment with you feels like a dream come true.",
  "You are my today and all of my tomorrows.",
  "In your smile, I see my entire world.",
  "You are the best thing that ever happened to me.",
  "My heart is and will always be yours.",
  "Loving you is my favorite thing in life."
];

function updateGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById("greeting");

  let baseGreeting = "";

  if (hour >= 4 && hour < 12) {
    baseGreeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    baseGreeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    baseGreeting = "Good Evening";
  } else {
    baseGreeting = "Good Night";
  }

  // Change every 2 hours
  const index = Math.floor(hour / 2) % nicknames.length;
  const quoteIndex = Math.floor(hour / 2) % quotes.length;

  greetingElement.style.opacity = 0;

  setTimeout(() => {
    greetingElement.innerText =
      `${baseGreeting}, ${nicknames[index]} 🌹`;
    document.querySelector(".message").innerText = quotes[quoteIndex];
    greetingElement.style.opacity = 1;
  }, 300);
}

updateGreeting();

// Auto refresh greeting every 2 hours
setInterval(updateGreeting, 2 * 60 * 60 * 1000);

// Dark mode toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("portfolioBtn");
  const transition = document.getElementById("pageTransition");

  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Fade out current content
      document.querySelector(".container").classList.add("fade-out");

      // Show transition screen
      transition.classList.add("active");

      // Redirect after animation
      setTimeout(() => {
        window.location.href = btn.href;
      }, 1200);
    });
  }

});
