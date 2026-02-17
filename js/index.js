// DOM Elements
const timeElement = document.getElementById("current-time");
const dateElement = document.getElementById("current-date");
const quoteElement = document.getElementById("quote-text");

// Store quotes array
let quotesArray = [];

// Load quotes from JSON file
async function loadQuotes() {
    try {
        const response = await fetch('data/quotes.json');
        const data = await response.json();
        quotesArray = data.quotes;
        displayRandomQuote();
    } catch (error) {
        console.error('Error loading quotes:', error);
        quoteElement.textContent = "Performance depends on Motivation";
    }
}

// Display a random quote
function displayRandomQuote() {
    if (quotesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        const quote = quotesArray[randomIndex];

        // Trigger animation by re-applying animation class
        quoteElement.style.animation = 'none';
        setTimeout(() => {
            quoteElement.textContent = `"${quote}"`;
            quoteElement.style.animation = 'quoteChange 0.6s ease-out';
        }, 10);
    }
}

// Update time display
function updateTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    timeElement.textContent = now.toLocaleTimeString('en-US', options);
}

// Update date display
function updateDate() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Initialize
function init() {
    updateTime();
    updateDate();
    loadQuotes();

    // Update time every second
    setInterval(updateTime, 1000);

    // Update date every minute (in case day changes)
    setInterval(updateDate, 60000);

    // Change quote every 30 seconds
    setInterval(displayRandomQuote, 30000);
}

// Start the application
init();