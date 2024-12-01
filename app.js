// JavaScript to toggle the menu on mobile
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-xmark');
const userName = document.getElementById('user-name');
const greeting = document.getElementById('greeting');

const urlThoth = "https://zenquotes.io/api/random";
async function fetchQuote() {
    try {
        const response = await fetch(urlThoth);
        const data = await response.json();
        console.log(data);
       
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}
fetchQuote();




userName.addEventListener('click', () => {
    // Prompt the user for their name
    let name = prompt('Enter your name:');
    
    // Validate the input and store it
    if (name && name.trim() !== "") {
        localStorage.setItem('userName', name.trim()); // Store the trimmed name
        userName.innerHTML = name.trim(); // Update the UI with the new name
    } else {
        // If input is invalid or canceled, reset the text
        userName.innerHTML = "User Name";
        localStorage.removeItem('userName'); // Optionally clear the stored value
    }
});

// Display greeting based on the current time

function displayGreeting() {
    const currentTime = new Date().getHours();
    let greetingMessage;

    if (currentTime >= 6 && currentTime < 12) {
        greetingMessage = "Good Morning";
    } else if (currentTime >= 12 && currentTime < 16) {
        greetingMessage = "Good Afternoon";
    } else if (currentTime>=16 && currentTime<20){
        greetingMessage = "Good Evening";
    }else{
        greetingMessage = "Good Night";
    }

    greeting.innerHTML = `${greetingMessage}, <span id="user-name">${localStorage.getItem('userName') || 'Your Name'}</span>`;
}
document.addEventListener('DOMContentLoaded', displayGreeting);

// Load the name from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedName = localStorage.getItem('userName');
    userName.innerHTML = storedName ? storedName : "User Name";
});

hamburger.addEventListener('click', () => {
    // Toggle the display of the hamburger and cross icon
    // menu.style.right = 0;
    setTimeout(() => {
        hamburgerMenu.style.display = (hamburgerMenu.style.display === 'none') ? 'block' : 'none';
        cross.style.display = (cross.style.display === 'block') ? 'none' : 'block';
        
        // Toggle the menu visibility
        hamburger.classList.toggle('active'); 
        menu.classList.toggle('active');
    },300)
   
});
