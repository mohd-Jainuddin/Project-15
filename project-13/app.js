let btn1 = document.querySelector("#btn1");
let bigbox = document.querySelector("#popup");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", function () {
    popup.setAttribute("class", "box");
})

btn2.addEventListener("click", function () {
    popup.setAttribute("class", "big-box")
})

