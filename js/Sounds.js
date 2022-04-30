/**
 * @class
 * @param {?string} successFileName
 * @param {?string} failFileName
 */
const Sounds = function (successFileName, failFileName) {
    if (successFileName !== undefined) {
        /**
         * @type {Audio}
         */
        this.success = new Audio(`../assets/sfx/${successFileName}`);
    }
    if (failFileName !== undefined) {
        /**
         * @type {Audio}
         */
        this.fail = new Audio(`../assets/sfx/${failFileName}`);
    }
};

/**
 * @class
 */
export const MediaPlayer = function () {
    /**
     * @type {Sounds}
     */
    this.water = new Sounds("bucket.m4A", "water-error.m4A");

    /**
     * @type {Sounds}
     */
    this.wood = new Sounds("axe.mp3", "wood-error.m4A");

    /**
     * @type {Sounds}
     */
    this.leaf = new Sounds("leaf.m4A", "leaf.m4A");

    /**
     * @type {Sounds}
     */
    this.rock = new Sounds("pickaxe.m4A", "pickaxe.m4A");

    /**
     * @type {Sounds}
     */
    this.dirt = new Sounds("shovel.m4A", "shovel.m4A");

    /**
     * @type {Sounds}
     */
    this.grass = this.dirt;

    /**
     * @type {Sounds}
     */
    this.lava = new Sounds("lava.m4A", "water-error.m4A");

    /**
     * @type {Sounds}
     */
    this.basalt = this.rock;

    /**
     * @type {Sounds}
     */
    this.sky = new Sounds("build.m4A");

    /**
     * @type {Sounds}
     */
    this.cloud = this.sky;

    /**
     * @description play the correct sound of the tool
     * @param {string} tile
     */
    this.playSound = (tile) => {
        if (this[tile] !== undefined) {
            this[tile].success.currentTime = 0;
            this[tile].success.play();
        } else {
            console.warn(`This tile doesn't exists`);
        }
    };

    /**
     * @description play a sound when the user hits incorrect tile
     * @param {string} tile
     */
    this.playErrorSound = (tile) => {
        if (this[tile] !== undefined) {
            this[tile].fail.currentTime = 0;
            this[tile].fail.play();
        } else {
            console.warn(`This tile doesn't exists`);
        }
    };
};
