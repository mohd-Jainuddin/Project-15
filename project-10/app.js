const dayname = document.querySelector("#day-name");
const monthname = document.querySelector("#month-name");
const daynumber = document.querySelector("#day-number");
const year = document.querySelector("#year");


function updateCalender() {
    const currentDate = new Date()

    monthname.innerText = currentDate.toLocaleString("en", { month: "long" });
    dayname.innerText = currentDate.toLocaleString("en", { weekday: "long" });
    daynumber.innerText = currentDate.getDate();
    year.innerText = currentDate.getFullYear();

}
updateCalender();