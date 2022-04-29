import { gameBoard } from "./gameBoard.js";

// tools constructor
const Tools = function () {
    this.axe = document.querySelector('[data-toolType="axe"]');
    this.pickaxe = document.querySelector('[data-toolType="pickaxe"]');
    this.shovel = document.querySelector('[data-toolType="shovel"]');
    this.build = document.querySelector('[data-toolType="build"]');
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
    selectedTool: null,
    validTile: [],
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

// Object tht holds the tool-tile couples:
const toolTileCouples = {
    axe: ["wood", "leaves"],
    pickaxe: ["rock"],
    shovel: ["grass", "dirt"],
    build: ["sky"],
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

/**
 * @description get tile data
 * @param {Node} tile
 * @returns {[string, string, string]}
 */
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

//check if tile is in the first row
const isFirstRow = (tileRow) => tileRow === 0;

// check if tile has sky from bottom
const hasEmptyBottom = (gameBoard, tileRow, tileCol) =>
    tileRow !== gameBoard.length - 1 &&
    gameBoard[tileRow + 1][tileCol] in [0, 1];

// check if tile has sky from top
const hasEmptyTop = (gameBoard, tileRow, tileCol) =>
    !isFirstRow(tileRow) && gameBoard[tileRow - 1][tileCol] in [0, 1];

// check if tile has sky from left
const hasEmptyLeft = (gameBoard, tileRow, tileCol) =>
    gameBoard[tileRow][tileCol - 1] in [0, 1];

// check if tile has sky from right
const hasEmptyRight = (gameBoard, tileRow, tileCol) =>
    gameBoard[tileRow][tileCol + 1] === 0;

// check if the user can mine the tile
const canMine = (gameBoard, tileRow, tileCol) =>
    isFirstRow(tileRow) ||
    hasEmptyBottom(gameBoard, tileRow, tileCol) ||
    hasEmptyTop(gameBoard, tileRow, tileCol) ||
    hasEmptyRight(gameBoard, tileRow, tileCol) ||
    hasEmptyLeft(gameBoard, tileRow, tileCol);

// get tile number from gameBoardTiles object
const getTileNumber = (dataType) =>
    Object.keys(gameBoardTiles).find(
        (tileNum) => gameBoardTiles[tileNum] === dataType
    );

// garb a tile from the board:
const mineTile = (e, { inventory, gameBoard, validTile }) => {
    const [currDataType, currPositionCol, currPositionRow] = getTileData(
        e.target
    );
    const tileNumber = getTileNumber(currDataType);
    if (currDataType !== "cloud") {
        if (
            currDataType !== "sky" &&
            validTile.indexOf(currDataType) !== -1 &&
            canMine(
                gameBoard,
                parseInt(currPositionRow),
                parseInt(currPositionCol)
            )
        ) {
            //add to inventory stack
            addToInventory(inventory, currDataType);
            console.log(gameBoard[currPositionRow][currPositionCol]);
            gameBoard[currPositionRow][currPositionCol] -= tileNumber;
            console.log(gameBoard[currPositionRow][currPositionCol]);
            e.target.setAttribute(
                "data-type",
                gameBoardTiles[gameBoard[currPositionRow][currPositionCol]]
            );
        }
    }
};

// get the last tile from inventory
const getLastTile = (inventory) => inventory.stack[inventory.stack.length - 1];

// use tile from inventory and build it in game board
const buildTile = (e, { gameBoard, inventory }) => {
    const inventoryLastTile = getLastTile(inventory);
    const tileNum = getTileNumber(inventoryLastTile);

    const [currDataType, currPositionCol, currPositionRow] = getTileData(
        e.target
    );

    if (currDataType === "sky" || currDataType === "cloud") {
        console.log(gameBoard[currPositionRow][currPositionCol]);
        gameBoard[currPositionRow][currPositionCol] |= tileNum;
        console.log(gameBoard[currPositionRow][currPositionCol]);
        e.target.setAttribute("data-type", inventoryLastTile);
        removeLastTile(gameState);
    }
};

// remove the last tile from inventory
const removeLastTile = ({ inventory }) => {
    const tileToRemove = inventory.stack.pop();
    inventory.element.setAttribute(
        "data-type",
        inventory.stack[inventory.stack.length - 1]
    );
    console.log(tileToRemove);
    // return tileToRemove;
};

// handle tile click
const handleTileClick = (e, { selectedTool }) => {
    if (selectedTool === "build") {
        buildTile(e, gameState);
    } else {
        mineTile(e, gameState);
    }
};

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

//validate tool and tile couple
const getTileFromTool = ({ tools }, selectedTool) => {
    const toolName = Object.keys(tools).find(
        (toolType) => tools[toolType] === selectedTool
    );

    // console.log(toolName);
    gameState.validTile = toolTileCouples[toolName];
    gameState.selectedTool = toolName;
    // console.log(gameState.validTile);
};

// gameState.tools.build.addEventListener("click", (e) => {
//     removeLastTile(gameState);
// });

for (const tool of Object.values(gameState.tools)) {
    tool.addEventListener("click", (e) => {
        highlightTool(gameState, e.target);
        getTileFromTool(gameState, e.target);
    });
}

gameState.getTiles().forEach((tile) => {
    tile.addEventListener("click", (e) => handleTileClick(e, gameState));
});
