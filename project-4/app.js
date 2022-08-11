const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const para = document.getElementById("para");

const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const para1 = document.getElementById("para1");

const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const para2 = document.getElementById("para2");

const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const para3 = document.getElementById("para3");


const text3 = "An event loop is something that pulls stuff out of the task queue and place it onto the function execution stack.whenever the function stack becomes empty."
const text2 = "A Higher order function is a regular function that takes one or more function as a arguments and/or returns a functions as a value from it."
const text1 = "In Javascript an operator is a special symbol used to perform operations on operands (value and variable)"
const text = "Javascript is a scripting language that enables you to create dynamically updating content,controlmultimedia,animate image and pretty much everything else."


btn1.addEventListener("click",function(){
    para.innerText = text
})

btn2.addEventListener("click",function(){
    para.innerText = ""
})


btn3.addEventListener("click",function(){
    para1.innerText = text1
})

btn4.addEventListener("click",function(){
    para1.innerText = ""
})

btn5.addEventListener("click",function(){
    para2.innerText = text2
})

btn6.addEventListener("click",function(){
    para2.innerText = ""
})

btn7.addEventListener("click",function(){
    para3.innerText = text3
})

btn8.addEventListener("click",function(){
    para3.innerText = ""
})

