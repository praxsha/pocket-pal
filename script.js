let friendship = 0;

const dialogue = document.getElementById("dialogue");
const friendshipText = document.getElementById("friendship");

const container = document.querySelector(".container");

const progressHTML = `
<p style="margin-top:15px;">Friendship Progress</p>

<div class="progress">
    <div class="progress-bar" id="progressBar"></div>
</div>

<h3 id="rank">🌱 Stranger</h3>
`;

container.insertAdjacentHTML("beforeend", progressHTML);

const progressBar = document.getElementById("progressBar");
const rank = document.getElementById("rank");

function updateUI(){

    friendshipText.textContent = friendship;

    let percent = friendship;

    if(percent>100){
        percent=100;
    }

    progressBar.style.width = percent + "%";

    if(friendship<25){

        rank.textContent="🌱 Stranger";

    }else if(friendship<50){

        rank.textContent="😊 Friend";

    }else if(friendship<75){

        rank.textContent="💖 Best Friend";

    }else{

        rank.textContent="💍 Soulmate";

    }

}

function feedPet(){

    friendship += 5;

    dialogue.textContent="🍎 Mochi enjoyed the food!";

    updateUI();

}

function playPet(){

    friendship += 10;

    dialogue.textContent="🎾 Mochi is having lots of fun!";

    updateUI();

}

function petPet(){

    friendship += 3;

    dialogue.textContent="🥰 Purr... Mochi loves your cuddles!";

    updateUI();

}

updateUI();
