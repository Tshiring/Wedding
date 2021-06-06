const selected = document.querySelector(".select-box");
const optionContainer = document.querySelector(".option-container");

const optionList = document.querySelectorAll(".option");

const gotop = document.querySelector(".gotop");

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 200){
        gotop.classList.add("active");
    }else{
            gotop.classList.remove("active");
        }
    
})

selected.addEventListener("click", () => {
    optionContainer.classList.toggle(".option-container");
});

optionList.forEach( o => {
    o.addEventListener("click", ()=> {
        selected.innerHTML = o.querySelector("input").innerHTML;
        optionContainer.classList.remove("active")
    })
});

