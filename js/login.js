// step:1 submit button event handleing
document.getElementById('submit-btn').addEventListener('click', function(){
    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check user email & password
    if(userEmail == 'sontan@bapp.com' && userPassword == 'secrat'){
        window.location.href = 'banking.html';
    }
    
})
