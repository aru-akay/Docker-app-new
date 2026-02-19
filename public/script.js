const greetingMessage = document.getElementById("greetingMessage");

const hour = new Date().getHours();

let greeting;

if (hour < 12) {
    greeting = "Good Morning 🌅";
} else if (hour < 18) {
    greeting = "Good Afternoon ☀️";
} else {
    greeting = "Good Evening 🌙";
}

greetingMessage.innerText = greeting + " — Welcome to Anand's Interactive App!";
