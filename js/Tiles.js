// tiles constructor
export const Tiles = function () {
    this.getAllClouds = () => document.querySelectorAll('[data-type="cloud"]');
    this.getAllLeaves = () => document.querySelectorAll('[data-type="leaf"]');
    this.getAllRocks = () => document.querySelectorAll('[data-type="rock"]');
    this.getAllWood = () => document.querySelectorAll('[data-type="wood"]');
    this.getAllGrass = () => document.querySelectorAll('[data-type="grass"]');
    this.getAllDirt = () => document.querySelectorAll('[data-type="dirt"]');
    this.getAllWater = () => document.querySelectorAll('[data-type="water"]');
    /**
     * @type {() => Node}
     */
    this.getTiles = () => document.querySelectorAll(".tile");
};
