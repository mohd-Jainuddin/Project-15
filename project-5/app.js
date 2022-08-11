const data = [{
    name: "Mohd Junaid",
    skill: "Frontend Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReONZ-LKBVsTduazWz890MVT2qBDCZd5WHw&usqp=CAU",
    about: "I design and develope websites and web application by using web technologies such as HTML,CSS,DOM,AND JAVASCRIPT. I have 3 yers Experience."
},
{
    name: "Yogendra Kumar",
    skill: "backend Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MI6FjdCs4QjREvY7BfcHGS29pDWVMrSD9A&usqp=CAU",
    about: "What i do-----> As soon as you log in,the backend fetches data from the database server and display personalized recommendations based on your interest and previous behavior."
},
{
    name: "Suman",
    skill: "UX UI Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PZR6TqCTvjMK1QfSbg0k333MOi1yDAa-qg&usqp=CAU",
    about: "I am a generalists who participate in all phases of the design process.At some point,every designer has pondered this very question-Coding, Ux design does not require coding."
},
{
    name: "Shilpa",
    skill: "Full Stack developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPskciyBO8oJnB3tL1b8VRZ9Yr6dMwE7dFeQ&usqp=CAU",
    about: "I work on both frontend(client-side) and backend(server-side) of a webside or application.I am also a youtuber.And i teach there all about coading and get a chance to become software Engineer. "
},
{
    name: "Mohd Jainuddin",
    skill: "Web developer",
    img: "https://p.kindpng.com/picc/s/20-208025_student-png-boy-in-college-transparent-png.png",
    about: "I am a web developer. I spend my whole day,practically every day,experimenting with HTML,CSS,AND JAVASCRIPT. I am constantly experimenting with newtechnologies and technique."
}];

const img = document.getElementById("pic")
const Name = document.getElementById("name")
const Skill = document.getElementById("skill")
const about = document.getElementById("about")

const prevbtn = document.getElementById("prevbtn")
const nextbtn = document.getElementById("nextbtn")

let count = 0;

nextbtn.addEventListener("click", function () {
    count++;
    if (count > data.length - 1) {
        count = 0;
    }
    const item = data[count];
    Name.innerText = item.name;
    Skill.innerText = item.skill;
    img.src = item.img;
    about.innerText = item.about;
})

prevbtn.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = data.length - 1;
    }
    const item = data[count];
    Name.innerText = item.name;
    Skill.innerText = item.skill;
    img.src = item.img;
    about.innerText = item.about;
})

