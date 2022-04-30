// tools constructor
const ToolTypes = function () {
    this.axe = document.querySelector('[data-toolType="axe"]');
    this.pickaxe = document.querySelector('[data-toolType="pickaxe"]');
    this.shovel = document.querySelector('[data-toolType="shovel"]');
    this.bucket = document.querySelector('[data-toolType="bucket"]');
    this.lavaBucket = document.querySelector('[data-toolType="lava bucket"]');
    this.build = document.querySelector('[data-toolType="build"]');
};

export const Tools = function () {
    this.types = new ToolTypes();
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

// Object tht holds the tool-tile couples:
export const toolTileCouples = {
    axe: ["wood", "leaf"],
    pickaxe: ["rock", "basalt"],
    shovel: ["grass", "dirt"],
    bucket: ["water"],
    lavaBucket: ["lava"],
    build: ["sky"],
};
