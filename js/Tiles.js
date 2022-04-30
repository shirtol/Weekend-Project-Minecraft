/**
 * @class
 */
export const Tiles = function () {
    /**
     * @type {() => NodeList}
     */
    this.getAllClouds = () => document.querySelectorAll('[data-type="cloud"]');

    /**
     * @type {() => NodeList}
     */
    this.getAllLeaves = () => document.querySelectorAll('[data-type="leaf"]');

    /**
     * @type {() => NodeList}
     */
    this.getAllRocks = () => document.querySelectorAll('[data-type="rock"]');

    /**
     * @type {() => NodeList}
     */
    this.getAllWood = () => document.querySelectorAll('[data-type="wood"]');

    /**
     * @type {() => NodeList}
     */
    this.getAllGrass = () => document.querySelectorAll('[data-type="grass"]');

    /**
     * @type {() => NodeList}
     */
    this.getAllDirt = () => document.querySelectorAll('[data-type="dirt"]');

    /**
     * @type {() => NodeList}
     */
    this.getAllWater = () => document.querySelectorAll('[data-type="water"]');

    /**
     * @type {() => NodeList}
     */
    this.getAllLava = () => document.querySelectorAll('[data-type="lava"]');

    /**
     * @type {() => NodeList}
     */
    this.getAllBasalt = () => document.querySelectorAll('[data-type="basalt"]');

    /**
     * @type {() => NodeList}
     */
    this.getTiles = () => document.querySelectorAll(".tile");
};

/**
 * @description Object that holds the gameBoard tiles elements:
 */

export const gameBoardTiles = {
    0: "sky",
    1: "cloud",
    2: "leaf",
    4: "rock",
    8: "wood",
    16: "grass",
    32: "dirt",
    64: "water",
    128: "lava",
    256: "basalt",
};

/**
 * @description tool and tile couples
 */
const toolTile = {
    leaf: "axe",
    rock: "Pickaxe",
    wood: "axe",
    grass: "Shovel",
    dirt: "Shovel",
    water: "Water_Bucket",
    lava: "Lava_Bucket",
    basalt: "Pickaxe",
};

/**
 * @description Create the tools and tiles table for game instructions
 */
export const createToolTileTable = () => {
    const table = document.querySelector("table");
    for (const tile of Object.values(gameBoardTiles)) {
        if (tile === "sky" || tile === "cloud") continue;
        const tr = document.createElement("tr");
        tr.style.height = "4rem";
        const tdTile = createTd("tiles", tile);
        const tdTool = createTd("tools", toolTile[tile]);

        tr.appendChild(tdTile);
        tr.appendChild(tdTool);
        table.appendChild(tr);
    }
};

/**
 *
 * @param {string} tile
 * @returns {HTMLElement}
 */

const createTd = (folderName, imgName) => {
    const tdTool = document.createElement("td");
    tdTool.classList.add("center-img");
    tdTool.style.backgroundImage = `url(../assets/img/${folderName}/${imgName}.webp)`;
    return tdTool;
};

/**
 *
 * @param {string} tileType
 * @param {number} row
 * @param {number} col
 * @returns {HTMLElement}
 */
export const createTile = (tileType, row, col) => {
    const tile = document.createElement("div");
    tile.setAttribute("data-type", tileType);
    tile.setAttribute("data-positionCol", col);
    tile.setAttribute("data-positionRow", row);
    tile.classList.add("tile");
    tile.classList.add("center-img");

    return tile;
};

/**
 * @description get tile data
 * @param {Node} tile
 * @returns {[string, number, number]}
 */
export const getTileData = (tile) => {
    const currDataType = tile.getAttribute("data-type");
    const currPositionCol = tile.getAttribute("data-positionCol");
    const currPositionRow = tile.getAttribute("data-positionRow");

    return [currDataType, parseInt(currPositionCol), parseInt(currPositionRow)];
};
