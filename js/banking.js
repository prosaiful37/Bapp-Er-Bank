
// handle deposite button evnt
document.getElementById('deposit-btn').addEventListener('click', function(){
    // update deposit total
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);


   const depositTotal = document.getElementById('deposit-total');
   const priviousDepositText = depositTotal.innerText;

   const priviousDepositAmount = parseFloat(priviousDepositText);
   const newDepositTotal = priviousDepositAmount + newDepositAmount;
   depositTotal.innerText = newDepositTotal;

   // update account balance 
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = priviousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;




   // clear the desposit input field
   depositInput.value = '';
});


// handle withdraw even handlr
document.getElementById('withdraw-btn').addEventListener('click', function(){
   
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmount);


    //set withdraw total amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const priviousWithdrawAmount = withdrawTotal.innerText;
    const priviouswithdrawTotal  = parseFloat(priviousWithdrawAmount);

    const newWithdrawTotal = priviouswithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;


    // update withdrow to total balacned
    const toalBalance = document.getElementById('balance-total');
    const totalBalanceText = toalBalance.innerText;
    const priviousBalanceTotal = parseFloat(totalBalanceText);
    const newBlalanceTotal = priviousBalanceTotal - newWithdrawTotal;

    toalBalance.innerText = newBlalanceTotal;


    // clear withdraw input
    withdrawInput.value = '';

    




})