export const MediaPlayer = function () {
    this.water = {
        success: new Audio("../assets/sfx/bucket.m4A"),
        fail: new Audio("../assets/sfx/water-error.m4A"),
    };
    this.wood = {
        success: new Audio("../assets/sfx/axe.mp3"),
        fail: new Audio("../assets/sfx/wood-error.m4A"),
    };
    this.leaf = {
        success: new Audio("../assets/sfx/leaf.m4A"),
        fail: new Audio("../assets/sfx/leaf.m4A"),
    };
    this.rock = {
        success: new Audio("../assets/sfx/pickaxe.m4A"),
        fail: new Audio("../assets/sfx/pickaxe.m4A"),
    };
    this.dirt = {
        success: new Audio("../assets/sfx/shovel.m4A"),
        fail: new Audio("../assets/sfx/shovel.m4A"),
    };
    this.grass = this.dirt;

    this.lava = {
        success: new Audio("../assets/sfx/lava.m4A"),
        fail: this.water.fail,
    };
    this.basalt = this.rock;

    this.sky = {
        success: new Audio("../assets/sfx/build.m4A"),
    };
    this.cloud = this.sky;

    this.playSound = (tile) => {
        if (this[tile] !== undefined) {
            this[tile].success.currentTime = 0;
            this[tile].success.play();
        } else {
            console.warn(`This tile doesn't exists`);
        }
    };

    this.playErrorSound = (tile) => {
        if (this[tile] !== undefined) {
            this[tile].fail.currentTime = 0;
            this[tile].fail.play();
        } else {
            console.warn(`This tile doesn't exists`);
        }
    };
};
