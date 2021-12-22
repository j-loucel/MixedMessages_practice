const helloMessages = ["Hello,", "Hey,", "Hi,", "Hello there,", "Yo!", "How you doin'?", "Nice to see you!"];
const superHeros = ["Batman", "Superman", "Flash", "Hulk", "Spiderman", "Ironman", "Doctor Strange", "Wonder Woman", "Black Widow", "Scarlet Witch", "Captain Marvel"];
const wishMessage = ["have a nice day!", "I hope you doing OK.", "good luck.", "keep pushing mate.", "don't stop now.", "keep working hard."];

const selectMessage = (message) => {
    const randomIndex = Math.floor(Math.random() * message.length);
    return message[randomIndex];
}

const greeting = selectMessage(helloMessages);
const character = selectMessage(superHeros);
const wishes = selectMessage(wishMessage);

console.log(`${greeting} I'm ${character}, ${wishes}`);