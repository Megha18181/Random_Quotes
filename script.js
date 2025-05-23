async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    document.getElementById('quote').innerText = data.content;
    document.getElementById('author').innerText = `- ${data.author}`;
}

// Fetch a quote when the page loads
getQuote();
