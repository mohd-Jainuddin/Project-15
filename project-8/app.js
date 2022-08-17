let btn = document.querySelector("#head-btn");
let head = document.querySelector("#head")
let banner = document.querySelector(".banner")

console.log(modalpart)

btn.addEventListener("click",function(){
    banner.innerHTML = ""
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","modal")
    newDiv.innerHTML =  `<div class="modal-box">
    <button id="cross-btn">X</button>
    <h3 class="head">modal content</h3>
</div>`
    head.appendChild(newDiv);
    banner.innerHTML = modal.innerHTML;
})