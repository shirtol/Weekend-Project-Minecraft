import { toolTileCouples } from "./Tools.js";

// tiles constructor
export const Tiles = function () {
    this.getAllClouds = () => document.querySelectorAll('[data-type="cloud"]');
    this.getAllLeaves = () => document.querySelectorAll('[data-type="leaf"]');
    this.getAllRocks = () => document.querySelectorAll('[data-type="rock"]');
    this.getAllWood = () => document.querySelectorAll('[data-type="wood"]');
    this.getAllGrass = () => document.querySelectorAll('[data-type="grass"]');
    this.getAllDirt = () => document.querySelectorAll('[data-type="dirt"]');
    this.getAllWater = () => document.querySelectorAll('[data-type="water"]');
    this.getAllLava = () => document.querySelectorAll('[data-type="lava"]');
    this.getAllBasalt = () => document.querySelectorAll('[data-type="basalt"]');
    /**
     * @type {() => Node}
     */
    this.getTiles = () => document.querySelectorAll(".tile");
};

// Object that holds the gameBoard tiles elements:
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

export const createToolTileTable = () => {
    const table = document.querySelector("table");
    for (const tile of Object.values(gameBoardTiles)) {
        if (tile === "sky" || tile === "cloud") continue;
        const tr = document.createElement("tr");
        tr.style.height = "4rem";
        const tdTile = document.createElement("td");
        tdTile.classList.add("center-img");
        const tdTool = document.createElement("td");
        tdTool.classList.add("center-img");

        tdTile.style.backgroundImage = `url(../assets/img/tiles/${tile}.webp)`;
        tdTool.style.backgroundImage = `url(../assets/img/tools/${toolTile[tile]}.webp)`;
        tr.appendChild(tdTile);
        tr.appendChild(tdTool);
        table.appendChild(tr);
    }
};
