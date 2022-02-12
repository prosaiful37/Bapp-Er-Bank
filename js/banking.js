
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
})