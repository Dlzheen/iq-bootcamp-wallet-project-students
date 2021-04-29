

let createWalletButton = document.querySelector("#create-wallet");

createWalletButton.addEventListener("click",createWalletAlert);

let div = document.querySelector("#modal");

function createWalletAlert(){
 

div.style.display = "block";
let cancel_div = document.querySelector(".cancel-modal-btn"); 
cancel_div.addEventListener("click",function(){
    div.style.display = "none";
})

}

