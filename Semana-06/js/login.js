window.onload = function () {

    var errorMessagePassword = document.getElementById("error-message-password");
    var errorMessageEmail = document.getElementById("error-message-email");
    var password = document.getElementsByName("password")[0];
    var email = document.getElementsByName("email")[0];
    var button = document.getElementsByName("button-log-in")[0];
    var emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    password.addEventListener("blur", function() {
        if (password.value.length < 8) {
            errorMessagePassword.style.display = 'flex';
        }
        for(i = 0; i <= password.value.length; i++) {
            if (Number.isInteger(password.value) == false){
                if ((password.value.toLowerCase() === 
                 (password.value.toUpperCase()))) {
                    errorMessagePassword.style.display = 'flex';
                }
            }
        }
        
        console.log("gaga")
        console.log(Number.isInteger(password.value));
        console.log((password.value.toLowerCase() ==
        (password.value.toUpperCase())))

    }, true);

    password.addEventListener("focus", function() {
        errorMessagePassword.style.display = 'none';
    }, true);

    email.addEventListener("blur", function() {
        if(email.value.match(emailCheck) == null){
            errorMessageEmail.style.display = 'flex';
        }
        console.log(email.value.match(emailCheck));
    }, true)

    email.addEventListener("focus", function(){
        errorMessageEmail.style.display = 'none';
    }, true)
}