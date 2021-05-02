class Wallet {
  constructor(name,balance,currency){
    this.name=name;
    this.balance = balance
    this.currency = currency;
  }
  getName(){
    return this.name;
  }
  getBalance(){
    return this.balance;
  }
  getCurrency(){
    return this.currency;
  }
  getIncome(amount)
  {
    this.balance = this.balance+amount;
    return this.balance;
  }
  getExpense(amount){
    this.balance = this.balance-amount;
    return this.balance;
  }
}
class Transaction extends Wallet{
   
  getTransaction(){
    let userBalanceInput = document.querySelector("#user-balance-input");
    let li = document.createElement("li");
    let getdate = new Date();
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    li.innerText = `${userBalanceInput.value} ${days[getdate.getDay()]} ${getdate.getDate()}/ ${getdate.getMonth()+1}/${getdate.getFullYear()}`;
    let transactionList = document.querySelector("#transaction-list");
   
    transactionList.append(li);
    userBalanceInput.value = "";
  }
}

let modaldiv = document.querySelector("#modal");
let walletDiv = document.querySelector("#wallet-div");
let indexDiv = document.querySelector("#index-div");
let createWalletBtn = document.querySelector("#create-wallet");
createWalletBtn.addEventListener("click",createWalletAlert);
function createWalletAlert(){
  modaldiv.style.display = "flex";
  modaldiv.style.position = "relative";

  indexDiv.style.position = "fixed";
 walletDiv.style.position = "fixed";  

  let canceModal = document.querySelector("#cancel-modal-btn");
  canceModal.addEventListener("click", function(){
    modaldiv.style.display = "none";
  });
}
let ul = document.querySelector("#list-of-wallets-ul");
ul.style.display = "flex";
let modalForm =document.querySelector("#modal-form");
modalForm.addEventListener("submit", createWallet);
let listOfWallets = document.querySelector("#list-of-wallets");
function createWallet(event){
  event.preventDefault();
  listOfWallets.style.display = "inline";
  modaldiv.style.display = "none";
  indexDiv.style.display = "none"
  let userName = document.querySelector("#modal-name").value;
  let userBalance =document.querySelector("#modal-balance").value;
  let checkUserCurrency = document.getElementsByName("currency1");
  let userCurrency = "";
  if(checkUserCurrency[0].checked)
  {
    userCurrency = checkUserCurrency[0].value;
  }
  else{
    userCurrency = checkUserCurrency[1].value;
  }
  let newWallet = new Wallet(userName,parseInt(userBalance),userCurrency);
  let li = document.createElement("li");
  li.innerHTML = newWallet.getName();
  li.style.listStyle = "none";
  li.style.background = "gray";
  li.style.padding = "5px";
  li.style.margin ="2px";
  li.style.borderRadius = "5px";
  li.addEventListener("mouseover", function(){
    li.style.backgroundColor = "#008080";
  })
  li.addEventListener("mouseout", function(){
    li.style.backgroundColor = "gray";
  })
  ul.append(li);
let createWalletBtn3 = document.querySelector("#create-wallet-btn3");
createWalletBtn3.addEventListener("click", createWalletAlert);
showWallets();
li.addEventListener("click", showWallets);
function showWallets(){
  walletDiv.style.display="inline";
  let walletDivH2 = document.querySelector("#wallet-div h2");
  let walletDivH3 = document.querySelector("#wallet-div h3");
  let userBalanceBtn = document.querySelector("#user-balance-btn");
  walletDivH2.innerText = `${newWallet.getName()}'s Wallet`;
  walletDivH3.innerHTML = "Wallet balance " +newWallet.getCurrency() +" "+newWallet.getBalance();
    userBalanceBtn.innerText = newWallet.getCurrency()+" "+newWallet.getBalance();
   //income function
   let incomeBtn = document.querySelector("#income-btn");
  incomeBtn.addEventListener("click", function(){
    let userBalanceInput = document.querySelector("#user-balance-input");
    newWallet.getIncome(parseInt(userBalanceInput.value));
    walletDivH3.innerHTML = "Wallet balance " +newWallet.getCurrency() +" "+newWallet.getBalance();
    userBalanceBtn.innerText = newWallet.getCurrency()+" "+newWallet.getBalance();
  });
   //expense function
  let expenseBtn = document.querySelector("#expence-btn");
  expenseBtn.addEventListener("click", function(){
    let userBalanceInput = document.querySelector("#user-balance-input");
    newWallet.getExpense(parseInt(userBalanceInput.value));
    walletDivH3.innerHTML = "Wallet balance " +newWallet.getCurrency() +" "+newWallet.getBalance();
    userBalanceBtn.innerText = newWallet.getCurrency()+" "+newWallet.getBalance();
   });
  let transactionBtn = document.querySelector("#trans-btn");
transactionBtn.addEventListener("click", function(){
    
    let NewTransaction = new Transaction();
    NewTransaction.getTransaction();
  });
  
}
 
}




















