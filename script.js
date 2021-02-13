//login button event handler
const loginButton = document.getElementById('login');
const loginArea = document.getElementById('loginArea');
const transactionArea = document.getElementById('transaction-area');


const form = document.getElementById("formSubmit");
// transaction area showing and login area hidden event
form.addEventListener("submit", function (e) {
    e.preventDefault();
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
});
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;

// loginButton.addEventListener('click', function () {

//     if (email == '' || password == '') {
//         alert("please filled your form");
//         loginArea.style.display = 'block';
//         transactionArea.style.display = 'none';
//     }
//     else {
       
//         loginArea.style.display = 'none';
//         transactionArea.style.display = 'block';
//     }

// })

//transaction button event handler

//depositButton event handler

const depositButton = document.getElementById('addDeposit');
depositButton.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount')
    //    const depositAmount = document.getElementById('depositAmount').value;
    //    const depositNumber = parseFloat(depositAmount);

    if (depositNumber < 0) {
        alert('deposit number cannot be negative or zero');
        document.getElementById('depositAmount').value = "";
    }
    else {
        updateSpanText('currentDeposit', depositNumber);
        updateSpanText('currentBalance', depositNumber);
        document.getElementById('depositAmount').value = "";
    }



    //    const currentDeposit = document.getElementById('currentDeposit').innerText;
    //    const currentDepositNumber = parseFloat(currentDeposit);
    //    const totalDeposit = depositNumber + currentDepositNumber;
    //    document.getElementById('currentDeposit').innerText = totalDeposit;

    //    const currentBalance = document.getElementById('currentBalance').innerText;
    //    const currentBalanceNumber = parseFloat(currentBalance);
    //    const totalBalance = depositNumber + currentBalanceNumber; 
    //    document.getElementById('currentBalance').innerText = totalBalance;



})

//withdrawButton event handler

const withdrawButton = document.getElementById('addWithdraw');
withdrawButton.addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdrawAmount')

    updateSpanText('currentWithdraw', withdrawNumber);

    updateSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
})
function getInputNumber(id) {
    const amount = document.getElementById(id).value;

    if (amount === "" || isNaN(amount)) {
        alert("Amount must be filled out");
        return false;
    }
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = addedNumber + currentAmountNumber;
    document.getElementById(id).innerText = totalAmount;
}
