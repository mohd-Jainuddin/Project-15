const btn = document.querySelector(".btn");
const que = document.querySelector("h2");
const lable = document.querySelectorAll(".lable");
const input = document.querySelectorAll("input")
// console.log(input)

const questions = [
    {
        'que': '2) Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'currect': 'a'
    },

    {
        'que': '3) What year was Javascript language?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'currect': 'b'
    },

    {
        'que': '4) What does CSS stand for?',
        'a': 'HyperText Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jasson Object Notation',
        'd': 'Data Structure',
        'currect': 'b'
    }
]


let num = 0;

btn.addEventListener("click",function nextQue(){
    if(input[num].checked) input[num].checked = false;
    que.innerText = questions[num].que;
    lable[0].innerText = questions[num].a;
    lable[1].innerText = questions[num].b;
    lable[2].innerText = questions[num].c;
    lable[3].innerText = questions[num].d;
    num++;
})
