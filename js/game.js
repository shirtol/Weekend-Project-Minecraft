import { Tools, toolTileCouples } from "./Tools.js";
import { Inventory } from "./Inventory.js";
import { GameState } from "./GameState.js";
import { MediaPlayer } from "./Sounds.js";
import { gameBoardTiles, createTile, getTileData } from "./Tiles.js";
import {
    isFirstRow,
    isLastRow,
    hasEmptyBottom,
    hasEmptyLeft,
    hasEmptyRight,
    hasEmptyTop,
} from "./utils.js";

const mediaPlayer = new MediaPlayer();

const params = new URLSearchParams(window.location.search);
const paramsVal = params.get("worldType");

const gameState = new GameState(paramsVal);

// check if we are in a world that have lava (hawaii):
const hasLava = paramsVal === "hawaii";
const lavaWorldSpecialTheme = (hasLava, { life }) => {
    if (hasLava) {
        const lavaTool = document.querySelector(
            '[data-toolType="lava bucket"]'
        );
        lavaTool.style.display = "block";
        life.lifeContainer.style.display = "flex";
    }
};

lavaWorldSpecialTheme(hasLava, gameState);

const checkIfGameEnded = (life, endGameEl) => {
    if (life.life === 0) {
        endGameEl.style.display = "flex";
    }
};

/**
 * @description  lose life function (only in hawaii world): when the user try touching lava without the lava bucket he will lose life
 * @param {*} param0
 */
const loseLifeIfNeeded = (tile, { tools, life, endGameEl }) => {
    if (tile === "lava" && tools.selectedTool !== "lava bucket") {
        life.life--;
        life.allHearts[0].remove();
        life.allHearts.shift();
        checkIfGameEnded(life, endGameEl);
    }
};

const modeToggle = ({ modes, container, tiles }) => {
    if (modes.dayNight.getAttribute("data-mode") === "day") {
        container.classList.add("night");
        container.classList.remove("day");
        modes.dayNight.setAttribute("data-mode", "night");
        tiles
            .getAllClouds()
            .forEach((cloud) => cloud.classList.add("night-tile"));
    } else {
        container.classList.add("day");
        container.classList.remove("night");
        modes.dayNight.setAttribute("data-mode", "day");
        tiles
            .getAllClouds()
            .forEach((cloud) => cloud.classList.remove("night-tile"));
    }
};

gameState.modes.dayNight.addEventListener("click", (e) =>
    modeToggle(gameState)
);

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
 * @description check if the user can build the tile
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
const canBuild = (gameBoard, tileRow, tileCol) =>
    isLastRow(tileRow, gameBoard) ||
    !hasEmptyBottom(gameBoard, tileRow, tileCol) ||
    !hasEmptyTop(gameBoard, tileRow, tileCol) ||
    !hasEmptyRight(gameBoard, tileRow, tileCol) ||
    !hasEmptyLeft(gameBoard, tileRow, tileCol);

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
    inventory.addToInventory(currDataType);
    gameBoard[currPositionRow][currPositionCol] -= tileNumber;
    e.target.setAttribute(
        "data-type",
        gameBoardTiles[gameBoard[currPositionRow][currPositionCol]]
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
 * @param {Tools} Obj.tools
 */
const mineTile = (
    e,
    { inventory, gameBoard, validTile, tilesCounter, tools }
) => {
    const [currDataType, currPositionCol, currPositionRow] = getTileData(
        e.target
    );

    if (currDataType !== "cloud" && currDataType !== "sky") {
        if (validTile.indexOf(currDataType) !== -1) {
            if (canMine(gameBoard, currPositionRow, currPositionCol)) {
                addToInventoryStack(e, gameBoard, inventory);
                tilesCounter.textContent =
                    parseInt(tilesCounter.textContent) + 1;
                mediaPlayer.playSound(currDataType);
            }
        } else {
            loseLifeIfNeeded(currDataType, gameState);
            tools.displayErrorTool();
            mediaPlayer.playErrorSound(currDataType);
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
            if (canBuild(gameBoard, currPositionRow, currPositionCol)) {
                const inventoryLastTile = removeLastTile(gameState);
                gameBoard[currPositionRow][currPositionCol] |=
                    getTileNumber(inventoryLastTile);
                e.target.setAttribute("data-type", inventoryLastTile);
                tilesCounter.textContent =
                    parseInt(tilesCounter.textContent) - 1;
                mediaPlayer.playSound(currDataType);
            }
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

gameState.tiles.getTiles().forEach((tile) => {
    tile.addEventListener("click", (e) => handleTileClick(e, gameState));
});

document.querySelector("#refresh").addEventListener("click", (e) => {
    window.location.reload();
});
