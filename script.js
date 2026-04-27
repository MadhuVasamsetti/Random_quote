const quotes = [
    { text: "Believe in yourself.", author: "Unknown" },
    { text: "Never give up.", author: "Winston Churchill" },
    { text: "Dream big, work hard.", author: "Anonymous" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Stay positive and happy.", author: "Unknown" },
    { text: "Hard work beats talent.", author: "Tim Notke" }
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    let quoteText = document.getElementById("quote");
    let authorText = document.getElementById("author");

    // Fade out
    quoteText.style.opacity = 0;

    setTimeout(() => {
        quoteText.innerText = quotes[randomIndex].text;
        authorText.innerText = "- " + quotes[randomIndex].author;

        // Fade in
        quoteText.style.opacity = 1;
    }, 300);

    changeBackground();
}

function changeBackground() {
    const colors = [
        "linear-gradient(135deg, #667eea, #764ba2)",
        "linear-gradient(135deg, #ff758c, #ff7eb3)",
        "linear-gradient(135deg, #43cea2, #185a9d)",
        "linear-gradient(135deg, #ff9966, #ff5e62)",
        "linear-gradient(135deg, #00c6ff, #0072ff)"
    ];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}