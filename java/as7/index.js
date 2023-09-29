function writeCards(names, eventName) {
    const thankYouMessages = [];

    for (let i = 0; i < names.length; i++) {
        const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(thankYouMessage);
    }

    return thankYouMessages;
}

// Example usage:
const namesArray = ['Alice', 'Bob', 'Charlie'];
const event = 'Birthday';

const thankYouCards = writeCards(namesArray, event);

// Log the generated thank you cards
for (const card of thankYouCards) {
    console.log(card);
}