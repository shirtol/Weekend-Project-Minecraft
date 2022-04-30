import { israel, australia } from "./gameBoard.js";
import { Modes } from "./Modes.js";
import { Tools } from "./Tools.js";
import { Inventory } from "./Inventory.js";
import { Tiles } from "./Tiles.js";

/**
 *@class
 @param {string} worldType
 */
export const GameState = function (worldType) {
    /**
     * @type {number[][]}
     */
    this.gameBoard = getWorldByType(worldType);

    /**
     * @type {Node}
     */
    this.container = document.querySelector(".container");

    /**
     * @type {Inventory}
     */
    this.inventory = new Inventory();

    /**
     * @description controlling day/night cycle
     * @type {Modes}
     */
    this.modes = new Modes();

    /**
     * @type {Tools}
     */
    this.tools = new Tools();

    /**
     * @type {string[]}
     */
    this.validTile = [];

    /**
     * @type {Tiles}
     */
    this.tiles = new Tiles();

    /**
     *
     * @type {Node}
     */
    this.tilesCounter = document.querySelector(".tile-counter");
};

/**
 *
 * @param {string} selectedWorldType
 * @returns {number[][]}
 */
const getWorldByType = (selectedWorldType) => {
    switch (selectedWorldType) {
        case "israel":
            return israel;
        case "australia":
            return australia;
        default:
            throw new Error(`Incorrect world selected: ${selectedWorldType}`);
    }
};
