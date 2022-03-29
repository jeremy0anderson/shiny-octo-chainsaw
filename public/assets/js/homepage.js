const hostGameBtn = document.querySelector("#host");
const joinGameBtn = document.querySelector("#join");

const hostGameBtnHandler = function() {
    console.log("host");
};

const joinGameHandler = function() {
    console.log("join");
};

hostGameBtn.addEventListener("click", hostGameBtnHandler);
joinGameBtn.addEventListener("click", joinGameHandler);