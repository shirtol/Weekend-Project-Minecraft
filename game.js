import { gameBoard } from "./gameBoard.js";

// tools constructor
const Tools = function () {
    this.axe = document.querySelector('[data-toolType="axe"]');
    this.pickaxe = document.querySelector('[data-toolType="pickaxe"]');
    this.shovel = document.querySelector('[data-toolType="shovel"]');
};

// gameState holds all the element we need for the game
const gameState = {
    gameBoard: gameBoard,
    container: document.querySelector(".container"),
    inventory: {
        stack: [],
        element: document.querySelector(".inventory"),
    },
    tools: new Tools(),
    getTiles: () => document.querySelectorAll(".tile"),
};

// Object that holds the gameBoard tiles elements:
const gameBoardTiles = {
    0: "sky",
    1: "cloud",
    2: "leaves",
    4: "rock",
    8: "wood",
    16: "grass",
    32: "dirt",
};

// create gameBoard:
const draw = ({ gameBoard, container }) => {
    for (let row = 0; row < gameBoard.length; row++) {
        const rowLength = gameBoard[row].length;
        // console.log(rowLength);
        for (let col = 0; col < rowLength; col++) {
            const tile = document.createElement("div");
            tile.setAttribute("data-type", gameBoardTiles[gameBoard[row][col]]);
            tile.setAttribute("data-positionCol", col);
            tile.setAttribute("data-positionRow", row);
            tile.classList.add("tile");
            tile.classList.add("center-img");
            container.appendChild(tile);
        }
    }
};

draw(gameState);

// create an event: clicking on a tile will change the background image.
// const changeDataType = (e) => {
//     let currDataType = e.target.getAttribute("data-type");
//     // console.log(currDataType);
//     if (currDataType === "grass") {
//         e.target.setAttribute("data-type", "rock");
//     }
// };

// get tile data
const getTileData = (tile) => {
    const currDataType = tile.getAttribute("data-type");
    const currPositionCol = tile.getAttribute("data-positionCol");
    const currPositionRow = tile.getAttribute("data-positionRow");

    return [currDataType, currPositionCol, currPositionRow];
};

// add tile to inventory
const addToInventory = (inventory, data) => {
    inventory.stack.push(data);
    inventory.element.setAttribute("data-type", data);
};

// garb a tile from the board:
const mineTile = (e, { inventory, gameBoard }) => {
    const [currDataType, currPositionCol, currPositionRow] = getTileData(
        e.target
    );

    if (currDataType !== "cloud") {
        if (currDataType !== "sky") {
            //add to inventory stack
            addToInventory(inventory, currDataType);
        }

        gameBoard[currPositionRow][currPositionCol] = 0;
        e.target.setAttribute("data-type", "sky");
    }
};

gameState.getTiles().forEach((tile) => {
    tile.addEventListener("click", (e) => mineTile(e, gameState));
});

// reset highlight
const resetHighlight = ({ tools }) => {
    for (const tool of Object.values(tools)) {
        tool.style.borderColor = "#fff";
    }
};

// highlight tools when clicked
const highlightTool = ({ tools }, selectedTool) => {
    resetHighlight({ tools });
    selectedTool.style.borderColor = "yellow";
};

for (const tool of Object.values(gameState.tools)) {
    tool.addEventListener("click", (e) => {
        highlightTool(gameState, e.target);
    });
}
