const display = document.getElementById("input-display");
const balance = document.getElementById("balance");
const message = document.getElementById("message");

const AmountLimit = 10000;

let CurrentValue = parseFloat(localStorage.getItem("BalanceValue")) || 0;
balance.innerText = CurrentValue;

function updateBalance(value) {
    localStorage.setItem("BalanceValue", value);
    balance.innerText = value;
}

function Deposit(input) {
    input = parseFloat(input);
    display.value = " ";    

    if (isNaN(input) || input <= 0) {
        message.innerText = "Enter a valid amount.";
        return;
    }

    if (input > AmountLimit) {
        alert("YAWAAAAAAA LAPASSS");
        return;
    }

    CurrentValue += input;
    updateBalance(CurrentValue);
    message.innerText = `You successfully deposited: ${input}`;
}

function Withdraw(get) {
    get = parseFloat(get);
    display.value = "   "
    
    if (isNaN(get) || get <= 0) {
        message.innerText = "Enter a valid amount.";
        return;
    }

    if (get > CurrentValue) {
        message.innerText = "Insufficient Balance.";
        return;

    } else {
        CurrentValue -= get;
        updateBalance(CurrentValue);
        message.innerText = `You successfully withdrew: ${get}`
    }
}
