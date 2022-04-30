/**
 * @class
 */
export const Life = function () {
    /**
     * @type {number}
     */
    this.life = 3;

    /**
     * @type {Node[]}
     */
    this.allHearts = [...document.querySelectorAll(".heart")];

    /**
     * @type {Node}
     */
    this.lifeContainer = document.querySelector(".life");
};
