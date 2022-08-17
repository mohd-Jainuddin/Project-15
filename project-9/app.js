const hour = document.querySelector(".hour");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");

function updateclock() {
    const currentDate = new Date()
    const hour1 = currentDate.getHours();
    const minute1 = currentDate.getMinutes();
    const second1 = currentDate.getSeconds();
    const hourDeg = (hour1 / 12) * 360;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute1 / 60) * 360;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second1 / 60) * 360;
    second.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateclock,1000);