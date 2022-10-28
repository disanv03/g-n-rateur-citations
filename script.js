// Création de constante associé à l'élément HTML
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// Générateur de citation
function newQuote(){
    // Choisi une citation aléatoire
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Vérifie si la citation contient un autheur
    if (!quote.author) {
        authorText.textContent = '- Anonyme';
    } else {
        authorText.textContent = "- " + quote.author;
    }
    // Test de longueur de chaîne et ajoute de style appropié
    if (quote.text.length > 50)  {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}


// Tweeter la citation
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Les Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Lancement
newQuote();