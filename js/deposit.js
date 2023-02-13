document.getElementById("depositBtn").addEventListener("click", function(){
    const depositInput = document.getElementById("depositInput");
    const depositInputValue = depositInput.value;
    const depositInputValueNumber = parseFloat(depositInputValue);
    depositInput.value = "";
    const currentDeposit = document.getElementById("deposit");
    const currentDepositInnerText = currentDeposit.innerText;
    const currentDepositNumber = parseFloat(currentDepositInnerText);

    currentDeposit.innerText = currentDepositNumber + depositInputValueNumber;

    const availableBalance = document.getElementById("availableBalance");
    const availableBalanceInnerText = availableBalance.innerText;
    const availableBalanceNumber = parseFloat(availableBalanceInnerText);
    availableBalance.innerText = availableBalanceNumber + depositInputValueNumber;
})