import { gameBoard } from "./gameBoard.js";
import { Modes } from "./Modes.js";
import { Tools } from "./Tools.js";
import { Inventory } from "./Inventory.js";

/**
 *@class
 */
export const GameState = function () {
    /**
     * @type {number[][]}
     */
    this.gameBoard = gameBoard;
    /**
     * @type {Node}
     */
    this.container = document.querySelector(".container");
    /**
     * @type {Inventory}
     */
    this.inventory = new Inventory();
    /**
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
     * @type {() => Node}
     */
    this.getTiles = () => document.querySelectorAll(".tile");
};
