window.onload = function () {
    var errorMessagePassword = document.getElementById("error-message-password");
    var errorMessageEmail = document.getElementById("error-message-email");
    var password = document.getElementsByName("password")[0];
    var email = document.getElementsByName("email")[0];
    var button = document.getElementsByName("button-log-in")[0];
    var emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var formOK = true;

    password.addEventListener("blur", function() {
        if (password.value.length < 8) {
            errorMessagePassword.style.display = 'flex';
        }
        for(i = 0; i < password.value.length; i++) {
            if (Number.isInteger(parseInt(password.value.substring(i, i+1))) == false){
                if (password.value.substring(i, i+1).toLowerCase() == 
                password.value.substring(i, i+1).toUpperCase()) {
                    errorMessagePassword.style.display = 'flex';
                    break;
                }
            }
        }
    }, true);

    password.addEventListener("focus", function() {
        errorMessagePassword.style.display = 'none';
    }, true);

    email.addEventListener("blur", function() {
        if(email.value.match(emailCheck) == null){
            errorMessageEmail.style.display = 'flex';
        }
    }, true);

    email.addEventListener("focus", function(){
        errorMessageEmail.style.display = 'none';
    }, true);

    button.onclick= function(){
        formOK= true;
        if (password.value.length < 8) {
            formOK= false;
            window.alert('Password must contain at least 8 alphanumeric characters');
        }

        for(i = 0; i < password.value.length; i++) {
            if (Number.isInteger(parseInt(password.value.substring(i, i+1))) == false){
                if (password.value.substring(i, i+1).toLowerCase() == 
                password.value.substring(i, i+1).toUpperCase()) {
                    formOK= false;
                    window.alert('Password must contain at least 8 alphanumeric characters');
                    break;
                }
            }
        }

        if(email.value.match(emailCheck) == null){
            formOK= false;
            window.alert('The email is not valid');
        }

        if(formOK){
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${password.value}')
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                console.log("json", jsonResponse)
                if (jsonResponse.success) {
                    console.log("Good");
                    localStorage.setItem('Email', JSON.stringify(email));
                    localStorage.setItem('Password', JSON.stringify(password));
                    window.alert('You have successfully logged in');
                    return jsonResponse
                } else {
                    throw jsonResponse
                }
            })
            .catch(function (error) {
                console.warn('Error', error);
            })
        }
    }
}