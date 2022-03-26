const backBtn = document.querySelector("#back");
const playerFormEl = document.querySelector("#player-form");
const nameInputEl = document.querySelector("#name");
const gameCodeInputEl = document.querySelector("#game-code");


const backButtonHandler = function() {
    console.log("back");
};

const submitFormHandler = function(event) {
    event.preventDefault();

    const name = nameInputEl.value.trim();
    const gameCode = gameCodeInputEl.value.trim();

    console.log(name, gameCode);
};

backBtn.addEventListener("click", backButtonHandler);
playerFormEl.addEventListener("submit", submitFormHandler);