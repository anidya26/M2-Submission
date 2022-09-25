
let numdiv = document.getElementById("num");


let num = 0;


let pl = document.getElementById("inc-btn");
let min = document.getElementById("dec-btn");


pl.addEventListener("click", () => {
    ++num;
    numdiv.innerHTML = num;
})

min.addEventListener("click", () => {
    if (num > 0){
        --num;
        numdiv.innerHTML = num;
    }
    else {
        numdiv.innerHTML = 0;
    }
})