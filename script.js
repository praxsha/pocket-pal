let friendship = Number(localStorage.getItem("friendship")) || 0;
let hunger = Number(localStorage.getItem("hunger")) || 100;
let happiness = Number(localStorage.getItem("happiness")) || 100;
let energy = Number(localStorage.getItem("energy")) || 100;

const friendshipText = document.getElementById("friendship");
const dialogue = document.getElementById("dialogue");

const hungerBar = document.getElementById("hungerBar");
const happyBar = document.getElementById("happyBar");
const energyBar = document.getElementById("energyBar");

function saveGame() {
    localStorage.setItem("friendship", friendship);
    localStorage.setItem("hunger", hunger);
    localStorage.setItem("happiness", happiness);
    localStorage.setItem("energy", energy);
}

function updateBars() {
    friendshipText.textContent = friendship;
    hungerBar.value = hunger;
    happyBar.value = happiness;
    energyBar.value = energy;

    if (hunger < 25) {
        dialogue.textContent = "🍔 I'm starving!";
    } else if (energy < 25) {
        dialogue.textContent = "😴 I'm so sleepy...";
    } else if (happiness < 25) {
        dialogue.textContent = "😢 Please spend time with me!";
    } else {
        dialogue.textContent = "😊 I'm feeling great!";
    }

    saveGame();
}

function feedPet() {
    friendship += 5;
    hunger = Math.min(hunger + 20, 100);
    happiness = Math.min(happiness + 5, 100);

    dialogue.textContent = "😋 Yum! That was delicious!";
    updateBars();
}

function playPet() {
    friendship += 10;
    happiness = Math.min(happiness + 15, 100);
    energy = Math.max(energy - 10, 0);

    dialogue.textContent = "🎾 Yay! That was fun!";
    updateBars();
}

function petPet() {
    friendship += 3;
    happiness = Math.min(happiness + 10, 100);

    dialogue.textContent = "🥰 I love cuddles!";
    updateBars();
}

setInterval(() => {
    hunger = Math.max(hunger - 2, 0);
    happiness = Math.max(happiness - 1, 0);
    energy = Math.max(energy - 1, 0);

    updateBars();
}, 5000);

updateBars();
