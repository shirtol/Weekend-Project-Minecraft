import { gameBoard } from "./gameBoard.js";

// gameState holds all the element we need for the game
const gameState = {
    container: document.querySelector(".container"),
    getTiles: () => document.querySelectorAll(".tile"),
};

// Object that holds the gameBoard tiles elements:
const gameBoardTiles = {
    0: "sky",
    1: "cloud",
    2: "leaves",
    3: "rock",
    4: "wood",
    5: "grass",
    6: "dirt",
};

// create gameBoard:
const draw = (mat, { container }) => {
    for (let i = 0; i < mat.length; i++) {
        const rowLength = mat[i].length;
        // console.log(rowLength);
        for (let j = 0; j < rowLength; j++) {
            const tile = document.createElement("div");
            tile.setAttribute("data-type", gameBoardTiles[mat[i][j]]);
            tile.classList.add("tile");
            container.appendChild(tile);
        }
    }
};

draw(gameBoard, gameState);

// create an event: clicking on a tile will change the background image.
// const changeDataType = (e) => {
//     let currDataType = e.target.getAttribute("data-type");
//     // console.log(currDataType);
//     if (currDataType === "grass") {
//         e.target.setAttribute("data-type", "rock");
//     }
// };

// garb a tile from the board:
const mineTile = (e) => {
    let currDataType = e.target.getAttribute("data-type");
    if (currDataType !== "cloud") {
        e.target.removeAttribute("data-type");
    }
};

gameState.getTiles().forEach((tile) => {
    // console.log(tile);
    tile.addEventListener("click", mineTile);
});
