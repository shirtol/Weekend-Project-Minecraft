const LandPage = function () {
    this.startBtn = document.querySelector('[data-btnType="start"]');
    this.instructionBtn = document.querySelector(
        '[data-btnType="instructions"]'
    );
    this.howToPlay = document.querySelector(".how-to-play");
    this.worlds = ["israel", "australia"];
    this.worldsContainer = document.querySelector(".worlds-container");
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
        landPage.howToPlay.style.display === "block" ? "none" : "block";
});

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
