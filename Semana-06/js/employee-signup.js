window.onload = function () {
    var name = document.getElementsByName("name")[0];
    var surname = document.getElementsByName("surname")[0];
    var ID = document.getElementsByName("ID")[0];
    var telephone = document.getElementsByName("telephone")[0];
    var address = document.getElementsByName("address")[0];
    var location = document.getElementsByName("location")[0];
    var postalCode = document.getElementsByName("postal-code")[0];
    var email = document.getElementsByName("email")[0];
    var repeatEmail = document.getElementsByName("repeat-email")[0];
    var password = document.getElementsByName("password")[0];
    var repeatPassword = document.getElementsByName("repeat-password")[0];
    var errorMessageName = document.getElementById("error-message-name");
    var errorMessageSurname = document.getElementById("error-message-surname");
    var errorMessageID = document.getElementById("error-message-id");
    var errorMessageTelephone = document.getElementById("error-message-telephone");
    var errorMessageAddress = document.getElementById("error-message-address");
    var errorMessageLocation = document.getElementById("error-message-location");
    var errorMessagePostalCode = document.getElementById("error-message-postal-code");
    var errorMessageEmail = document.getElementById("error-message-email");
    var errorMessageEmailCoincide = document.getElementById("error-message-email-coincide");
    var errorMessageRepeatEmail = document.getElementById("error-message-repeat-email");
    var errorMessageRepeatEmailCoincide = document.getElementById("error-message-repeat-email-coincide");
    var errorMessagePassword = document.getElementById("error-message-password");
    var errorMessagePasswordCoincide = document.getElementById("error-message-password-coincide");
    var errorMessageRepeatPassword = document.getElementById("error-message-repeat-password");
    var errorMessageRepeatPasswordCoincide = document.getElementById("error-message-repeat-password-coincide");
    var button = document.getElementsByName("button-sign-up")[0];
    var emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    name.addEventListener("blur", function() {
        if(name.value.length <= 3){
            errorMessageName.style.display = 'flex';
        }

        for(i = 0; i < name.value.length; i++) {
            if (name.value.substring(i, i+1).toLowerCase() == 
            name.value.substring(i, i+1).toUpperCase()) {
                errorMessageName.style.display = 'flex';
                break;
            }  
        }
    }, true);

    name.addEventListener("focus", function() {
        errorMessageName.style.display = 'none';
    }, true);

    surname.addEventListener("blur", function() {
        if(surname.value.length <= 3){
            errorMessageSurname.style.display = 'flex';
        }

        for(i = 0; i < surname.value.length; i++) {
            if (surname.value.substring(i, i+1).toLowerCase() == 
            surname.value.substring(i, i+1).toUpperCase()) {
                errorMessageSurname.style.display = 'flex';
                break;
            }  
        }
    }, true);

    surname.addEventListener("focus", function() {
        errorMessageSurname.style.display = 'none';
    }, true);

    ID.addEventListener("blur", function() {
        if(ID.value.length <= 7){
            errorMessageID.style.display = 'flex';
        }
        if(Number.isInteger(parseInt(ID.value))== false) {
            errorMessageID.style.display = 'flex';
        }
    }, true);

    ID.addEventListener("focus", function() {
        errorMessageID.style.display = 'none';
    }, true);

    telephone.addEventListener("blur", function() {
        if(telephone.value.length != 10){
            errorMessageTelephone.style.display = 'flex';
        }
        if(Number.isInteger(parseInt(telephone.value))== false) {
            errorMessageTelephone.style.display = 'flex';
        }
    }, true);

    telephone.addEventListener("focus", function() {
        errorMessageTelephone.style.display = 'none';
    }, true);

    address.addEventListener("blur", function() {
        if (address.value.length < 5) {
            errorMessageAddress.style.display = 'flex';
        }

        if (address.value.indexOf(' ') == -1){
            errorMessageAddress.style.display = 'flex';  
        }

        for(i = 0; i < address.value.length; i++) {
            if (Number.isInteger(parseInt(address.value.substring(i, i+1))) == false){
                if (address.value.substring(i, i+1).toLowerCase() == 
                address.value.substring(i, i+1).toUpperCase() && address.value.substring(i, i+1) != ' ') {
                    errorMessageAddress.style.display = 'flex';
                    break;
                }
            }
        }
    }, true);

    address.addEventListener("focus", function() {
        errorMessageAddress.style.display = 'none';
    }, true);

    location.addEventListener("blur", function() {
        if (location.value.length <= 3 ) {
            errorMessageLocation.style.display = 'flex';
        }

        for(i = 0; i < location.value.length; i++) {
            if (Number.isInteger(parseInt(location.value.substring(i, i+1))) == false){
                if (location.value.substring(i, i+1).toLowerCase() == 
                location.value.substring(i, i+1).toUpperCase()) {
                    errorMessageLocation.style.display = 'flex';
                    break;
                }
            }
        }
    }, true);

    location.addEventListener("focus", function() {
        errorMessageLocation.style.display = 'none';
    }, true);

    postalCode.addEventListener("blur", function() {
        if(postalCode.value.length < 4 || postalCode.value.length > 5){
            errorMessagePostalCode.style.display = 'flex';
        }
        if(Number.isInteger(parseInt(postalCode.value))== false) {
            errorMessagePostalCode.style.display = 'flex';
        }
    }, true);

    postalCode.addEventListener("focus", function() {
        errorMessagePostalCode.style.display = 'none';
    }, true);

    email.addEventListener("blur", function() {
        if(email.value.match(emailCheck) == null){
            errorMessageEmail.style.display = 'flex';
        }

        if(email.value != repeatEmail.value){
            errorMessageEmailCoincide.style.display = 'flex';
            errorMessageRepeatEmailCoincide.style.display = 'flex';
        }
    }, true);

    email.addEventListener("focus", function(){
        errorMessageEmail.style.display = 'none';
        errorMessageEmailCoincide.style.display = 'none';
        errorMessageRepeatEmailCoincide.style.display = 'none';
    }, true);

    repeatEmail.addEventListener("blur", function() {
        if(email.value.match(emailCheck) == null){
            errorMessageRepeatEmail.style.display = 'flex';
        }

        if(email.value != repeatEmail.value){
            errorMessageEmailCoincide.style.display = 'flex';
            errorMessageRepeatEmailCoincide.style.display = 'flex';
        }
    }, true);

    repeatEmail.addEventListener("focus", function(){
        errorMessageRepeatEmail.style.display = 'none';
        errorMessageEmailCoincide.style.display = 'none';
        errorMessageRepeatEmailCoincide.style.display = 'none';
    }, true);

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

        if (password.value != repeatPassword.value) {
            errorMessagePasswordCoincide.style.display = 'flex';
            errorMessageRepeatPasswordCoincide.style.display = 'flex';
        }
    }, true);

    password.addEventListener("focus", function() {
        errorMessagePassword.style.display = 'none';
        errorMessagePasswordCoincide.style.display = 'none';
        errorMessageRepeatPasswordCoincide.style.display = 'none';
    }, true);

    repeatPassword.addEventListener("blur", function() {
        if (password.value.length < 8) {
            errorMessageRepeatPassword.style.display = 'flex';
        }

        for(i = 0; i < password.value.length; i++) {
            if (Number.isInteger(parseInt(password.value.substring(i, i+1))) == false){
                if (password.value.substring(i, i+1).toLowerCase() == 
                password.value.substring(i, i+1).toUpperCase()) {
                    errorMessageRepeatPassword.style.display = 'flex';
                    break;
                }
            }
        }

        if (password.value != repeatPassword.value) {
            errorMessagePasswordCoincide.style.display = 'flex';
            errorMessageRepeatPasswordCoincide.style.display = 'flex';
        }
    }, true);

    repeatPassword.addEventListener("focus", function() {
        errorMessageRepeatPassword.style.display = 'none';
        errorMessagePasswordCoincide.style.display = 'none';
        errorMessageRepeatPasswordCoincide.style.display = 'none';
    }, true);

    button.onclick = function() {
        
    }
}
