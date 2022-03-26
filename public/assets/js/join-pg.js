const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Player = require("../../../models/Player");

const backBtn = document.querySelector("#back");
const playerFormEl = document.querySelector("#player-form");
const nameInputEl = document.querySelector("#name");
const gameIdInputEl = document.querySelector("#game-id");


const backButtonHandler = function() {
    console.log("back");
};

const submitFormHandler = function(event) {
    event.preventDefault();

    const name = nameInputEl.value.trim();
    const gameId = gameIdInputEl.value.trim();

    const newPlayer = new Player(name, gameId);

    console.log(newPlayer);
};

backBtn.addEventListener("click", backButtonHandler);
playerFormEl.addEventListener("submit", submitFormHandler);