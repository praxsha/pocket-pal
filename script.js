let friendship = 0;

function updateFriendship() {
    document.getElementById("friendship").textContent = friendship;
}

function feedPet() {
    friendship += 5;
    document.getElementById("dialogue").textContent =
        "🍎 Yum! Thank you! You're the best!";
    updateFriendship();
}

function playPet() {
    friendship += 10;
    document.getElementById("dialogue").textContent =
        "🎾 Yay! That was so much fun!";
    updateFriendship();
}

function petPet() {
    friendship += 3;
    document.getElementById("dialogue").textContent =
        "🥰 Purr... I love cuddles!";
    updateFriendship();
}

updateFriendship();
