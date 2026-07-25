let friendship = 0;

let hunger = 100;
let happiness = 100;
let energy = 100;

const friendshipText = document.getElementById("friendship");
const dialogue = document.getElementById("dialogue");

const hungerBar = document.getElementById("hungerBar");
const happyBar = document.getElementById("happyBar");
const energyBar = document.getElementById("energyBar");

function updateBars() {
    hungerBar.value = hunger;
    happyBar.value = happiness;
    energyBar.value = energy;

    if (hunger < 25) {
        dialogue.innerHTML = "🍔 I'm hungry...";
    } else if (energy < 25) {
        dialogue.innerHTML = "😴 I'm sleepy...";
    } else if (happiness < 25) {
        dialogue.innerHTML = "😢 I need attention...";
    }
}

function feedPet() {

    friendship += 5;
    hunger = Math.min(hunger + 20, 100);
    happiness = Math.min(happiness + 5, 100);

    friendshipText.innerHTML = friendship;
    dialogue.innerHTML = "Yummy! Thank you! 😋";

    updateBars();
}

function playPet() {

    friendship += 10;
    happiness = Math.min(happiness + 15, 100);
    energy = Math.max(energy - 10, 0);

    friendshipText.innerHTML = friendship;
    dialogue.innerHTML = "That was so much fun! 🎾";

    updateBars();
}

function petPet() {

    friendship += 3;
    happiness = Math.min(happiness + 10, 100);

    friendshipText.innerHTML = friendship;
    dialogue.innerHTML = "Purrrrr ❤️";

    updateBars();
}

setInterval(() => {

    hunger = Math.max(hunger - 2, 0);
    happiness = Math.max(happiness - 1, 0);
    energy = Math.max(energy - 1, 0);

    updateBars();

}, 5000);

updateBars();
