// Function to create a deck of cards
function createDeck() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'King', 'ace'];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

    const deck = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            const cardName = `${rank}_of_${suit}`;
            const cardImage = `cards/${cardName}.png`; // Update the path to your actual image folder
            deck.push({ name: cardName, image: cardImage });
        }
    }

    return deck;
}

// Function to shuffle the deck using Fisher-Yates algorithm
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function playShuffleSound() {
    const audioElement = document.getElementById('shuffleSound');

    // Check if the audio element exists and is not null
    if (audioElement && audioElement.play) {
        audioElement.play();
    }
}

// Function to shuffle cards and update the display with shuffle ID
function shuffleCards() {
    const deck = createDeck();
    const shuffleId = generateUniqueShuffleId(); // Call a function to generate a unique ID
    playShuffleSound();
    shuffleDeck(deck);
    displayCards(deck, shuffleId); // Pass shuffleId to the displayCards function
}

// Function to display shuffled cards on the webpage with shuffle ID
// ...

// Function to display shuffled cards on the webpage with shuffle ID
function displayCards(deck, shuffleId) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    
    // Add the 'card-container' class to apply the styles from the CSS file
    cardContainer.classList.add('card-container');

    // Create a div to display the shuffle ID
    const shuffleIdElement = document.createElement('div');
    shuffleIdElement.className = 'shuffle-id';
    shuffleIdElement.textContent = `Shuffle ID: ${shuffleId}`;
    
    cardContainer.appendChild(shuffleIdElement);

    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'cards-wrapper';

    for (const card of deck) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        // Create an image element for each card
        const cardImage = document.createElement('img');
        // Adjust the path to your images folder
        cardImage.src = `C:/Users/smd38/Desktop/cardProject/cards/${card.name}.png`;
        cardImage.alt = card.name;
        cardElement.appendChild(cardImage);
        cardsWrapper.appendChild(cardElement);
    }

    cardContainer.appendChild(cardsWrapper);
}


// ...


// Function to generate a unique shuffle ID
function generateUniqueShuffleId() {
    return Date.now().toString();
}


