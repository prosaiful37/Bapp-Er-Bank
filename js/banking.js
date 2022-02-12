
// handle deposite button evnt
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposit
   const depositInput = document.getElementById('deposit-input');
   const depositAmount = depositInput.value;


   const depositTotal = document.getElementById('deposit-total');
   depositTotal.innerText = depositAmount;

   // clear the desposit input field
   depositInput.value = '';
})