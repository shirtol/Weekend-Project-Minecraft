export const Inventory = function () {
    this.stack = [];
    this.element = document.querySelector(".inventory");

    /**
     * @description add tile to inventory
     * @param {Inventory} inventory
     * @param {string} data
     */
    this.addToInventory = (data) => {
        this.stack.push(data);
        this.element.setAttribute("data-type", data);
    };
};
