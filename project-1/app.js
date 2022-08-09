const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const show = document.querySelector("#change")

const btn = document.querySelector(".key")

btn.addEventListener("click", function () {
    let start = "#"
    for (let i = 0; i < 6; i++) {
        start += colors[getRandomNumber()]
    }
    show.textContent = start;
    document.body.style.background = start;
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}