import { Tools } from "./Tools.js";
import { Inventory } from "./Inventory.js";
import { GameState } from "./GameState.js";

const params = new URLSearchParams(window.location.search);
const paramsVal = params.get("worldType");

const gameState = new GameState(paramsVal);

const modeToggle = ({ modes, container }) => {
    if (modes.dayNight.getAttribute("data-mode") === "day") {
        container.classList.add("night");
        container.classList.remove("day");
        modes.dayNight.setAttribute("data-mode", "night");
    } else {
        container.classList.add("day");
        container.classList.remove("night");
        modes.dayNight.setAttribute("data-mode", "day");
    }
};

gameState.modes.dayNight.addEventListener("click", (e) =>
    modeToggle(gameState)
);

// Object that holds the gameBoard tiles elements:
const gameBoardTiles = {
    0: "sky",
    1: "cloud",
    2: "leaf",
    4: "rock",
    8: "wood",
    16: "grass",
    32: "dirt",
    64: "water",
};

// Object tht holds the tool-tile couples:
const toolTileCouples = {
    axe: ["wood", "leaf"],
    pickaxe: ["rock"],
    shovel: ["grass", "dirt"],
    bucket: ["water"],
    build: ["sky"],
};

/**
 *
 * @param {string} tileType
 * @param {number} row
 * @param {number} col
 * @returns {HTMLElement}
 */
const createTile = (tileType, row, col) => {
    const tile = document.createElement("div");
    tile.setAttribute("data-type", tileType);
    tile.setAttribute("data-positionCol", col);
    tile.setAttribute("data-positionRow", row);
    tile.classList.add("tile");
    tile.classList.add("center-img");

    return tile;
};

/**
 * @description create gameBoard:
 * @param {Object} Obj
 * @param {number[][]} Obj.gameBoard
 * @param {Node} Obj.container
 */
const draw = ({ gameBoard, container }) => {
    for (let row = 0; row < gameBoard.length; row++) {
        const rowLength = gameBoard[row].length;
        for (let col = 0; col < rowLength; col++) {
            container.appendChild(
                createTile(gameBoardTiles[gameBoard[row][col]], row, col)
            );
        }
    }
};

draw(gameState);

/**
 * @description get tile data
 * @param {Node} tile
 * @returns {[string, number, number]}
 */
const getTileData = (tile) => {
    const currDataType = tile.getAttribute("data-type");
    const currPositionCol = tile.getAttribute("data-positionCol");
    const currPositionRow = tile.getAttribute("data-positionRow");

    return [currDataType, parseInt(currPositionCol), parseInt(currPositionRow)];
};

/**
 * @description add tile to inventory
 * @param {Inventory} inventory
 * @param {string} data
 */
const addToInventory = (inventory, data) => {
    inventory.stack.push(data);
    inventory.element.setAttribute("data-type", data);
};

/**
 * @description check if tile is in the first row
 * @param {number} tileRow
 * @returns {boolean}
 */
const isFirstRow = (tileRow) => tileRow === 0;

/**
 * @description check if tile has sky from bottom
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
const hasEmptyBottom = (gameBoard, tileRow, tileCol) =>
    tileRow !== gameBoard.length - 1 &&
    gameBoard[tileRow + 1][tileCol] in [0, 1];

/**
 * @description check if tile has sky from top
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
const hasEmptyTop = (gameBoard, tileRow, tileCol) =>
    !isFirstRow(tileRow) && gameBoard[tileRow - 1][tileCol] in [0, 1];

/**
 * @description check if tile has sky from left
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
const hasEmptyLeft = (gameBoard, tileRow, tileCol) =>
    gameBoard[tileRow][tileCol - 1] in [0, 1];

/**
 * @description check if tile has sky from right
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
const hasEmptyRight = (gameBoard, tileRow, tileCol) =>
    gameBoard[tileRow][tileCol + 1] === 0;

/**
 * @description check if the user can mine the tile
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
const canMine = (gameBoard, tileRow, tileCol) =>
    isFirstRow(tileRow) ||
    hasEmptyBottom(gameBoard, tileRow, tileCol) ||
    hasEmptyTop(gameBoard, tileRow, tileCol) ||
    hasEmptyRight(gameBoard, tileRow, tileCol) ||
    hasEmptyLeft(gameBoard, tileRow, tileCol);

/**
 * @description get tile number from gameBoardTiles object
 * @param {string} dataType
 * @returns {number}
 */
const getTileNumber = (dataType) =>
    Object.keys(gameBoardTiles).find(
        (tileNum) => gameBoardTiles[tileNum] === dataType
    );

/**
 *
 * @param {Event} e
 * @param {number[][]} gameBoard
 * @param {Inventory} inventory
 */
const addToInventoryStack = (e, gameBoard, inventory) => {
    const [currDataType, currPositionCol, currPositionRow] = getTileData(
        e.target
    );
    const tileNumber = getTileNumber(currDataType);
    addToInventory(inventory, currDataType);
    gameBoard[currPositionRow][currPositionCol] -= tileNumber;
    e.target.setAttribute(
        "data-type",
        gameBoardTiles[gameBoard[currPositionRow][currPositionCol]]
    );
};

/**
 *
 * @param {Object} Obj
 * @param {Tools} Obj.tools
 */
const displayErrorTool = ({ types, selectedTool }) => {
    if (selectedTool === undefined) return;
    types[selectedTool].classList.add("fleshing-error");

    setTimeout(
        () => types[selectedTool].classList.remove("fleshing-error"),
        1000
    );
};

// display counter error (when trying to build and the counter is zero)
const displayErrorCount = (tilesCounter) => {
    tilesCounter.classList.add("error-counter");
    setTimeout(() => tilesCounter.classList.remove("error-counter"), 1000);
};

/**
 * @description garb a tile from the board:
 * @param {Event} e
 * @param {Object} Obj
 * @param {Inventory} Obj.inventory
 * @param {number[][]} Obj.gameBoard
 * @param {string[]} Obj.validTile
 */
const mineTile = (e, { inventory, gameBoard, validTile, tilesCounter }) => {
    const [currDataType, currPositionCol, currPositionRow] = getTileData(
        e.target
    );

    if (currDataType !== "cloud" && currDataType !== "sky") {
        if (validTile.indexOf(currDataType) !== -1) {
            if (canMine(gameBoard, currPositionRow, currPositionCol)) {
                addToInventoryStack(e, gameBoard, inventory);
                tilesCounter.textContent =
                    parseInt(tilesCounter.textContent) + 1;
            }
        } else {
            displayErrorTool(gameState.tools);
        }
    }
};

/**
 * @description use tile from inventory and build it in game board
 * @param {Event} e
 * @param {Object} Obj
 * @param {number[][]} Obj.gameBoard
 * @param {Inventory} Obj.inventory
 */
const buildTile = (e, { gameBoard, inventory, tilesCounter }) => {
    if (inventory.stack.length > 0) {
        const [currDataType, currPositionCol, currPositionRow] = getTileData(
            e.target
        );

        if (currDataType === "sky" || currDataType === "cloud") {
            const inventoryLastTile = removeLastTile(gameState);
            gameBoard[currPositionRow][currPositionCol] |=
                getTileNumber(inventoryLastTile);
            e.target.setAttribute("data-type", inventoryLastTile);
            tilesCounter.textContent = parseInt(tilesCounter.textContent) - 1;
        }
    } else {
        displayErrorCount(tilesCounter);
    }
};

/**
 * @description remove the last tile from inventory
 * @param {Object} Obj
 * @param {Inventory} Obj.inventory
 * @returns {string}
 */
const removeLastTile = ({ inventory }) => {
    const tileToRemove = inventory.stack.pop();

    inventory.element.setAttribute(
        "data-type",
        inventory.stack[inventory.stack.length - 1]
    );

    return tileToRemove;
};

/**
 * @description handle tile click
 * @param {Event} e
 * @param {Object} Obj
 * @param {Tools} Obj.tools
 */
const handleTileClick = (e, { tools }) => {
    let selectedFunction;

    if (tools.selectedTool === "build") {
        selectedFunction = buildTile;
    } else {
        selectedFunction = mineTile;
    }

    selectedFunction(e, gameState);
};

/**
 *
 * @param {Tools} tools
 */
const resetHighlight = (tools) => {
    for (const tool of Object.values(tools)) {
        tool.classList.remove("selected");
    }
};

/**
 *
 * @param {Object} Obj
 * @param {Tools} Obj.tools
 * @param {Node} selectedTool
 */
const highlightTool = ({ tools }, selectedTool) => {
    resetHighlight(tools.types);
    selectedTool.classList.add("selected");
};

/**
 * @description validate tool and tile couple
 * @param {Object} Obj
 * @param {Tools} Obj.tools
 * @param {Node} selectedTool
 */
const getTileFromTool = ({ tools }, selectedTool) => {
    const toolName = Object.keys(tools.types).find(
        (toolType) => tools.types[toolType] === selectedTool
    );

    gameState.validTile = toolTileCouples[toolName];
    gameState.tools.selectedTool = toolName;
};

for (const tool of Object.values(gameState.tools.types)) {
    tool.addEventListener("click", (e) => {
        highlightTool(gameState, e.target);
        getTileFromTool(gameState, e.target);
    });
}

gameState.getTiles().forEach((tile) => {
    tile.addEventListener("click", (e) => handleTileClick(e, gameState));
});

document.querySelector("#refresh").addEventListener("click", (e) => {
    window.location.reload();
});
