let span = document.querySelector("#value");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

let count = 0;

btn1.addEventListener("click", function () {
    count--;
    if (count < 0) {
        span.style.color = "red"
    }
    span.innerText = count;
})

btn2.addEventListener("click", function () {
    count = 0;
    span.style.color = "black"
    span.innerText = count;
})

btn3.addEventListener("click", function () {
    count++;
    if (count > 0) {
        span.style.color = "green"
    }
    span.innerText = count;
})
