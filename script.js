let friendship = Number(localStorage.getItem("friendship")) || 0;
let hunger = Number(localStorage.getItem("hunger")) || 100;
let happiness = Number(localStorage.getItem("happiness")) || 100;
let energy = Number(localStorage.getItem("energy")) || 100;
let level = Number(localStorage.getItem("level")) || 1;

const friendshipText = document.getElementById("friendship");
const levelText = document.getElementById("level");
const dialogue = document.getElementById("dialogue");

const hungerBar = document.getElementById("hungerBar");
const happyBar = document.getElementById("happyBar");
const energyBar = document.getElementById("energyBar");

function saveGame() {
    localStorage.setItem("friendship", friendship);
    localStorage.setItem("hunger", hunger);
    localStorage.setItem("happiness", happiness);
    localStorage.setItem("energy", energy);
    localStorage.setItem("level", level);
}

function checkLevel() {
    const newLevel = Math.floor(friendship / 100) + 1;

    if (newLevel > level) {
        level = newLevel;
        dialogue.textContent = "🎉 Level Up! Mochi is now Level " + level + "!";
        document.getElementById("pet").style.transform = "scale(1.2)";

        setTimeout(() => {
            document.getElementById("pet").style.transform = "scale(1)";
        }, 300);
    }
}

function updateBars() {

    checkLevel();

    friendshipText.textContent = friendship;
    levelText.textContent = level;

    hungerBar.value = hunger;
    happyBar.value = happiness;
    energyBar.value = energy;

    if (hunger < 20) dialogue.textContent = "🍔 I'm hungry!";
    else if (energy < 20) dialogue.textContent = "😴 I'm sleepy...";
    else if (happiness < 20) dialogue.textContent = "😢 Play with me!";
    else if (dialogue.textContent.includes("Level Up")) {}
    else dialogue.textContent = "😊 I'm happy!";

    saveGame();
}

function feedPet() {
    friendship += 5;
    hunger = Math.min(hunger + 20,100);
    happiness = Math.min(happiness + 5,100);

    dialogue.textContent = "😋 Yum!";
    updateBars();
}

function playPet() {
    friendship += 10;
    happiness = Math.min(happiness + 15,100);
    energy = Math.max(energy - 10,0);

    dialogue.textContent = "🎾 That was fun!";
    updateBars();
}

function petPet() {
    friendship += 3;
    happiness = Math.min(happiness + 10,100);

    dialogue.textContent = "🥰 I love pets!";
    updateBars();
}

function sleepPet() {
    energy = 100;
    friendship += 2;

    dialogue.textContent = "💤 I had a nice nap!";
    updateBars();
}

setInterval(() => {
    hunger = Math.max(hunger - 2,0);
    happiness = Math.max(happiness - 1,0);
    energy = Math.max(energy - 1,0);

    updateBars();
},5000);

updateBars();
