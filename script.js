let friendship = Number(localStorage.getItem("friendship")) || 0;
let hunger = Number(localStorage.getItem("hunger")) || 100;
let happiness = Number(localStorage.getItem("happiness")) || 100;
let energy = Number(localStorage.getItem("energy")) || 100;
let level = Number(localStorage.getItem("level")) || 1;
let coins = Number(localStorage.getItem("coins")) || 0;

const friendshipText = document.getElementById("friendship");
const levelText = document.getElementById("level");
const coinText = document.getElementById("coins");
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
    localStorage.setItem("coins", coins);
}

function checkLevel() {
    let newLevel = Math.floor(friendship / 100) + 1;

    if (newLevel > level) {
        level = newLevel;
        dialogue.textContent = "🎉 Level Up! Mochi reached Level " + level + "!";
    }
}

function updateGame() {

    checkLevel();

    friendshipText.textContent = friendship;
    levelText.textContent = level;
    coinText.textContent = coins;

    hungerBar.value = hunger;
    happyBar.value = happiness;
    energyBar.value = energy;

    if (hunger < 20) {
        dialogue.textContent = "🍔 I'm hungry!";
    }
    else if (energy < 20) {
        dialogue.textContent = "😴 I'm sleepy...";
    }
    else if (happiness < 20) {
        dialogue.textContent = "😢 Please play with me!";
    }

    saveGame();
}

function feedPet(){

    friendship += 5;
    coins += 5;

    hunger = Math.min(hunger + 20,100);
    happiness = Math.min(happiness + 5,100);

    dialogue.textContent = "😋 Yummy! +5 Coins";

    updateGame();

}

function playPet(){

    friendship += 10;
    coins += 8;

    happiness = Math.min(happiness + 15,100);
    energy = Math.max(energy - 10,0);

    dialogue.textContent = "🎾 That was fun! +8 Coins";

    updateGame();

}

function petPet(){

    friendship += 3;
    coins += 3;

    happiness = Math.min(happiness + 10,100);

    dialogue.textContent = "🥰 I love cuddles! +3 Coins";

    updateGame();

}

function sleepPet(){

    friendship += 2;
    coins += 2;

    energy = 100;

    dialogue.textContent = "💖 I feel refreshed! +2 Coins";

    updateGame();

}

setInterval(()=>{

    hunger=Math.max(hunger-2,0);
    happiness=Math.max(happiness-1,0);
    energy=Math.max(energy-1,0);

    updateGame();

},5000);

updateGame();
