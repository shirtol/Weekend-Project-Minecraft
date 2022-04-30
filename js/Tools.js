/**
 * @class
 */
const ToolTypes = function () {
    /**
     * @type {Node}
     */
    this.axe = document.querySelector('[data-toolType="axe"]');

    /**
     * @type {Node}
     */
    this.pickaxe = document.querySelector('[data-toolType="pickaxe"]');

    /**
     * @type {Node}
     */
    this.shovel = document.querySelector('[data-toolType="shovel"]');

    /**
     * @type {Node}
     */
    this.bucket = document.querySelector('[data-toolType="bucket"]');

    /**
     * @type {Node}
     */
    this.lavaBucket = document.querySelector('[data-toolType="lava bucket"]');

    /**
     * @type {Node}
     */
    this.build = document.querySelector('[data-toolType="build"]');
};

/**
 * @class
 */
export const Tools = function () {
    /**
     * @type {ToolTypes}
     */
    this.types = new ToolTypes();

    /**
     * @type {string}
     */
    this.selectedTool = undefined;

    /**
     *
     * @param {Object} Obj
     * @param {Tools} Obj.tools
     */
    this.displayErrorTool = () => {
        if (this.selectedTool === undefined) return;
        this.types[this.selectedTool].classList.add("fleshing-error");

        setTimeout(
            () =>
                this.types[this.selectedTool].classList.remove(
                    "fleshing-error"
                ),
            1000
        );
    };
};

export const toolTileCouples = {
    axe: ["wood", "leaf"],
    pickaxe: ["rock", "basalt"],
    shovel: ["grass", "dirt"],
    bucket: ["water"],
    lavaBucket: ["lava"],
    build: ["sky"],
};
