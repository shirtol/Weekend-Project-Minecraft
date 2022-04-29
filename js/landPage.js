const startBtn = document.querySelector('[data-btnType="start"]');
const instructionBtn = document.querySelector('[data-btnType="instructions"]');
const howToPlay = document.querySelector(".how-to-play");

startBtn.addEventListener("click", () => {
    window.location.assign("../game.html");
});

instructionBtn.addEventListener("click", () => {
    howToPlay.style.display =
        howToPlay.style.display === "block" ? "none" : "block";
});
