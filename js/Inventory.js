/**
 * @class
 */
export const Inventory = function () {
    /**
     * @type {string[]}
     */
    this.stack = [];

    /**
     * @type {Node}
     */
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
