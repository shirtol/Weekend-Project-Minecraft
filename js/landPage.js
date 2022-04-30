import { createToolTileTable } from "./Tiles.js";

/**
 * @class
 */
const LandPage = function () {
    /**
     * @type {Node}
     */
    this.startBtn = document.querySelector('[data-btnType="start"]');

    /**
     * @type {Node}
     */
    this.instructionBtn = document.querySelector(
        '[data-btnType="instructions"]'
    );

    /**
     * @type {Node}
     */
    this.howToPlay = document.querySelector(".how-to-play");

    /**
     * @type {string[]}
     */
    this.worlds = ["israel", "australia", "hawaii"];

    /**
     * @type {Node}
     */
    this.worldsContainer = document.querySelector(".worlds-container");

    /**
     * @type {() => NodeList}
     */
    this.getWorlds = () => document.querySelectorAll("[data-worldType]");
};

const landPage = new LandPage();

landPage.startBtn.addEventListener("click", () => {
    landPage.howToPlay.style.display = "none";
    landPage.worldsContainer.style.display =
        landPage.worldsContainer.style.display === "flex" ? "none" : "flex";
});

landPage.instructionBtn.addEventListener("click", () => {
    landPage.worldsContainer.style.display = "none";
    landPage.howToPlay.style.display =
        landPage.howToPlay.style.display === "flex" ? "none" : "flex";
});

/**
 *
 * @param {Object} Obj
 * @param {Node} Obj.worldsContainer
 * @param {string[]} Obj.worlds
 */
const addWorldsToContainer = ({ worldsContainer, worlds }) => {
    for (const world of worlds) {
        const worldEl = document.createElement("div");
        worldEl.setAttribute("data-worldType", world);
        worldEl.classList.add("center-img");
        worldsContainer.appendChild(worldEl);
    }
};

addWorldsToContainer(landPage);

const addClickEventToAllWorlds = () => {
    const allWorlds = landPage.getWorlds();
    for (const world of allWorlds) {
        world.addEventListener("click", () => {
            window.location.assign(
                `../game.html?worldType=${world.getAttribute("data-worldType")}`
            );
        });
    }
};

addClickEventToAllWorlds();

createToolTileTable();
