window.onload = function () {
    var name = document.getElementsByName("name")[0];
    var surname = document.getElementsByName("surname")[0];
    var ID = document.getElementsByName("ID")[0];
    var telephone = document.getElementsByName("telephone")[0];
    var dateOfBirth = document.getElementsByName("date-of-birth")[0];
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
    var errorMessageDateOfBirth = document.getElementById("error-message-date-of-birth");
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
    var nameOk = false;
    var surnameOk = false;
    var idOK = false;
    var telephoneOK = false;
    var dateOfBirthOK = false;
    var addressOK = false;
    var locationOK = false;
    var postalCodeOK = false;
    var emailOK = false;
    var emailCoincideOK = false;
    var passwordOK = false;
    var passwordCoincideOk = false;
    var formOK = false;
    var emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    name.addEventListener("blur", function() {
        nameOk = true;
        if(name.value.length <= 3){
            nameOk = false;
            errorMessageName.style.display = 'flex';
        }

        for(i = 0; i < name.value.length; i++) {
            if (name.value.substring(i, i+1).toLowerCase() == 
            name.value.substring(i, i+1).toUpperCase()) {
                nameOk = false;
                errorMessageName.style.display = 'flex';
                break;
            }  
        }
    }, true);

    name.addEventListener("focus", function() {
        errorMessageName.style.display = 'none';
    }, true);

    surname.addEventListener("blur", function() {
        surnameOk = true;
        if(surname.value.length <= 3){
            surnameOk = false;
            errorMessageSurname.style.display = 'flex';
        }

        for(i = 0; i < surname.value.length; i++) {
            if (surname.value.substring(i, i+1).toLowerCase() == 
            surname.value.substring(i, i+1).toUpperCase()) {
                surnameOk = false;
                errorMessageSurname.style.display = 'flex';
                break;
            }  
        }
    }, true);

    surname.addEventListener("focus", function() {
        errorMessageSurname.style.display = 'none';
    }, true);

    ID.addEventListener("blur", function() {
        idOK = true;
        if(ID.value.length <= 7){
            idOK = false;
            errorMessageID.style.display = 'flex';
        }
        if(Number.isInteger(parseInt(ID.value))== false) {
            idOK = false;
            errorMessageID.style.display = 'flex';
        }
    }, true);

    ID.addEventListener("focus", function() {
        errorMessageID.style.display = 'none';
    }, true);

    telephone.addEventListener("blur", function() {
        telephoneOK = true;
        if(telephone.value.length != 10){
            telephoneOK = false;
            errorMessageTelephone.style.display = 'flex';
        }
        if(Number.isInteger(parseInt(telephone.value))== false) {
            telephoneOK = false;
            errorMessageTelephone.style.display = 'flex';
        }
    }, true);

    telephone.addEventListener("focus", function() {
        errorMessageTelephone.style.display = 'none';
    }, true);

    dateOfBirth.addEventListener("blur", function(){
        var today = new Date();
        dateOfBirthOK = true;
        if ((today.getFullYear() - dateOfBirth.value.getFullYear()) < 18){

        }
        console.log(dateOfBirth.value);
    }, true);

    address.addEventListener("blur", function() {
        addressOK = true;
        if (address.value.length < 5) {
            addressOK = false;
            errorMessageAddress.style.display = 'flex';
        }

        if (address.value.indexOf(' ') == -1){
            addressOK = false;
            errorMessageAddress.style.display = 'flex';  
        }

        for(i = 0; i < address.value.length; i++) {
            if (Number.isInteger(parseInt(address.value.substring(i, i+1))) == false){
                if (address.value.substring(i, i+1).toLowerCase() == 
                address.value.substring(i, i+1).toUpperCase() && address.value.substring(i, i+1) != ' ') {
                    addressOK = false;
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
        locationOK = true;
        if (location.value.length <= 3 ) {
            locationOK = false;
            errorMessageLocation.style.display = 'flex';
        }

        for(i = 0; i < location.value.length; i++) {
            if (Number.isInteger(parseInt(location.value.substring(i, i+1))) == false){
                if (location.value.substring(i, i+1).toLowerCase() == 
                location.value.substring(i, i+1).toUpperCase()) {
                    locationOK = false;
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
        postalCodeOK = true;
        if(postalCode.value.length < 4 || postalCode.value.length > 5){
            postalCodeOK = false;
            errorMessagePostalCode.style.display = 'flex';
        }
        if(Number.isInteger(parseInt(postalCode.value))== false) {
            postalCodeOK = false;
            errorMessagePostalCode.style.display = 'flex';
        }
    }, true);

    postalCode.addEventListener("focus", function() {
        errorMessagePostalCode.style.display = 'none';
    }, true);

    email.addEventListener("blur", function() {
        emailOK = true;
        emailCoincideOK = true;
        if(email.value.match(emailCheck) == null){
            emailOK = false;
            errorMessageEmail.style.display = 'flex';
        }

        if(email.value != repeatEmail.value){
            emailCoincideOK = false;
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
        emailOK = true;
        emailCoincideOK = true;
        if(email.value.match(emailCheck) == null){
            emailOK = false;
            errorMessageRepeatEmail.style.display = 'flex';
        }

        if(email.value != repeatEmail.value){
            emailCoincideOK = false;
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
        passwordOK = true;
        passwordCoincideOk = true;
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

        if (password.value != repeatPassword.value) {
            passwordCoincideOk = false;
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
        passwordOK = true;
        passwordCoincideOk = true;
        if (password.value.length < 8) {
            passwordOK = false;
            errorMessageRepeatPassword.style.display = 'flex';
        }

        for(i = 0; i < password.value.length; i++) {
            if (Number.isInteger(parseInt(password.value.substring(i, i+1))) == false){
                if (password.value.substring(i, i+1).toLowerCase() == 
                password.value.substring(i, i+1).toUpperCase()) {
                    passwordOK = false;
                    errorMessageRepeatPassword.style.display = 'flex';
                    break;
                }
            }
        }

        if (password.value != repeatPassword.value) {
            passwordCoincideOk = false;
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
        formOK = true;
        if (nameOk == false) {
            formOK = false;
            window.alert('Name must contain at least 3 letters');
        }

        if (surnameOk == false){
            formOK = false;
            window.alert('Surname must contain at least 3 letters')
        }

        if (idOK == false){
            formOK = false;
            window.alert('ID must contain more than 7 numbers');
        }

        if (telephoneOK == false){
            formOK = false;
            window.alert('Telephone must contain 10 numbers');
        }

        if (dateOfBirthOK == false){
            formOK = false;
            window.alert('');
        }

        if (addressOK == false){
            formOK = false;
            window.alert('Address must contain at least 5 characters including letters, numbers and a space');
        }

        if (locationOK == false){
            formOK = false;
            window.alert('Location must contain more than 3 alphanumeric characters');
        }

        if (postalCodeOK == false){
            formOK = false;
            window.alert('Postal code must contain between 4 and 5 numbers');
        }

        if (emailOK == false){
            formOK = false;
            window.alert('The email is not valid');
        }

        if (emailCoincideOK == false){
            formOK = false;
            window.alert('Emails do not coincide');
        }

        if (passwordOK == false){
            formOK = false;
            window.alert('Password must contain at least 8 alphanumeric characters');
        }

        if (passwordCoincideOk == false){
            formOK = false;
            window.alert('Passwords do not coincide');
        }

        if (formOK == true){
            window.alert('Employee successfully created');
        }
    }
}