
// Every menu btn selected
let breakfast = document.querySelector("#breakfast");
let All = document.querySelector("#All");
let lunch = document.querySelector("#lunch");
let shakes = document.querySelector("#shakes");



let main1 = document.querySelector("#main");
let main2 = document.querySelector(".main");

// Every Element Selected inside the menus...
let breakfast1 = document.querySelectorAll(".breakfast");
let lunch1 = document.querySelectorAll(".Lunch");
let shakes1 = document.querySelectorAll(".Shakes");



// For the breakfast event


breakfast.addEventListener("click",function(){
    main1.innerHTML = ""

    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    let newDiv3 = document.createElement("div");
    
    newDiv1.setAttribute("class","All");
    newDiv2.setAttribute("class","All");
    newDiv3.setAttribute("class","All");

    newDiv1.innerHTML = breakfast1[0].innerHTML;
    newDiv2.innerHTML = breakfast1[1].innerHTML;
    newDiv3.innerHTML = breakfast1[2].innerHTML;
    main1.appendChild(newDiv1);
    main1.appendChild(newDiv2);
    main1.appendChild(newDiv3);
})


// For the All event

All.addEventListener("click",function(){
    main1.innerHTML = main2.innerHTML;
})


// For the lunch event

lunch.addEventListener("click",function(){
    main1.innerHTML = ""

    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    let newDiv3 = document.createElement("div");
    
    newDiv1.setAttribute("class","All");
    newDiv2.setAttribute("class","All");
    newDiv3.setAttribute("class","All");

    newDiv1.innerHTML = lunch1[0].innerHTML;
    newDiv2.innerHTML = lunch1[1].innerHTML;
    newDiv3.innerHTML = lunch1[2].innerHTML;
    main1.appendChild(newDiv1);
    main1.appendChild(newDiv2);
    main1.appendChild(newDiv3);
})

// For the shakes event
shakes.addEventListener("click",function(){
    main1.innerHTML = ""

    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    let newDiv3 = document.createElement("div");
    
    newDiv1.setAttribute("class","All");
    newDiv2.setAttribute("class","All");
    newDiv3.setAttribute("class","All");

    newDiv1.innerHTML = shakes1[0].innerHTML;
    newDiv2.innerHTML = shakes1[1].innerHTML;
    newDiv3.innerHTML = shakes1[2].innerHTML;
    main1.appendChild(newDiv1);
    main1.appendChild(newDiv2);
    main1.appendChild(newDiv3);
})