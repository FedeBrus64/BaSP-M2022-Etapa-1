window.onload = function () {
    var errorMessagePassword = document.getElementById("error-message-password");
    var errorMessageEmail = document.getElementById("error-message-email");
    var password = document.getElementsByName("password")[0];
    var email = document.getElementsByName("email")[0];
    var button = document.getElementsByName("button-log-in")[0];
    var modal = document.getElementsByClassName("modal")[0];
    var alertParagraph = document.getElementById("alert-paragraph");
    var emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var closeButton = document.getElementById("close-button");
    var okButton = document.getElementById("ok-button");
    var alertTitle = document.getElementById("alert-title");
    var emailOK = false;
    var passwordOK = false;
    var formOK = true;

    if (localStorage.getItem('Email') != null && localStorage.getItem('Password') != null){
        emailOK = true;
        passwordOK = true;
        email.value = localStorage.getItem('Email');
        password.value = localStorage.getItem('Password');
    }
    
    function validatePassword() {
        passwordOK = true;
        if (password.value.length < 8) {
            passwordOK = false;
            errorMessagePassword.style.display = 'flex';
        }
        for(i = 0; i < password.value.length; i++) {
            if (Number.isInteger(parseInt(password.value.substring(i, i+1))) == false){
                if (password.value.substring(i, i+1).toLowerCase() == 
                password.value.substring(i, i+1).toUpperCase()) {
                    passwordOK = false;
                    errorMessagePassword.style.display = 'flex';
                    break;
                }
            }
        }
    }

    function validateEmail() {
        emailOK = true;
        if (email.value.match(emailCheck) == null){
            emailOK = false;
            errorMessageEmail.style.display = 'flex';
        }
    }

    function validateForm() {
        formOK= true;

        if (emailOK == false){
            formOK= false;
            window.alert('The email is not valid');
        }

        if (passwordOK == false){
            formOK= false;
            window.alert('Password must contain at least 8 alphanumeric characters');
        }

        if (formOK){
            fetch(`https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${password.value}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                console.log("json", jsonResponse)
                if (jsonResponse.success) {
                    modal.style.display = 'flex';
                    alertTitle.innerHTML = 'Log in process successful';
                    alertParagraph.innerHTML = jsonResponse.msg;
                    // window.alert('You have successfully logged in');
                    // window.alert(jsonResponse.msg);
                    console.log("Good");
                    localStorage.setItem('Email', email.value);
                    localStorage.setItem('Password', password.value);
                    return jsonResponse
                } else {
                    throw jsonResponse
                }
            })
            .catch(function (error) {
                modal.style.display = 'flex';
                alertTitle.innerHTML = 'Log in process unsuccessful';
                if (Array.isArray(error.errors)){
                    for (i = 0; i < error.errors.length; i++) {
                        alertParagraph.innerHTML = error.errors[i].msg;
                    }
                }
                else{
                    alertParagraph.innerHTML = error.msg;
                }
                // window.alert('The log in process was unsuccessful');
                // window.alert(error.msg);
                console.warn('Error', error);
            })
        }
    }

    password.addEventListener("blur", validatePassword, true);

    password.addEventListener("focus", function() {
        errorMessagePassword.style.display = 'none';
    }, true);

    email.addEventListener("blur", validateEmail, true);

    email.addEventListener("focus", function(){
        errorMessageEmail.style.display = 'none';
    }, true);

    button.onclick= validateForm;

    closeButton.onclick = function(){
        modal.style.display = 'none'
    }

    okButton.onclick = function(){
        modal.style.display = 'none'
    }
}