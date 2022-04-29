// tools constructor
const ToolTypes = function () {
    this.axe = document.querySelector('[data-toolType="axe"]');
    this.pickaxe = document.querySelector('[data-toolType="pickaxe"]');
    this.shovel = document.querySelector('[data-toolType="shovel"]');
    this.build = document.querySelector('[data-toolType="build"]');
};

export const Tools = function () {
    this.types = new ToolTypes();
    this.selectedTool = null;
};
