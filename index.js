
const input = document.getElementById("fav-color");
const sBtn = document.getElementById("submitbtn");
const cBtn = document.getElementById("clearbtn");
const output = document.getElementById("output");
const body = document.body;

let favC = localStorage.getItem("fav_color") ;
if (favC) {
    output.textContent = `Your favorite color is ${favC.toLowerCase()}.`;
    body.style.backgroundColor = favC;
}

sBtn.addEventListener("click", function(){
    favC = input.value;

    output.textContent = `Your favorite color is ${favC.toLowerCase()}.`;

    localStorage.setItem("fav_color",favC);

    body.style.backgroundColor = favC;

    input.value = "";
})

cBtn.addEventListener("click",function(){

    localStorage.removeItem("fav_color");

    output.textContent = "Enter your favorite color.";
    
    body.style.backgroundColor = "white";
})


