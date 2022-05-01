window.onload = function() {
    var businessName = document.getElementsByName("business-name")[0];
    var email = document.getElementsByName("email")[0];
    var message = document.getElementsByName("message")[0];
    var phoneNumber = document.getElementsByName("phone-number")[0];
    var errorMessageEmail = document.getElementById("error-message-email");
    var errorMessageBusinessName = document.getElementById("error-message-business-name");
    var errorMessageMessage = document.getElementById("error-message-message");
    var errorMessagePhoneNumber = document.getElementById("error-message-phone-number");
    var businessNameOk = false;
    var emailOK = false;
    var messageOk = false;
    var phoneNumberOk = false;
    var formOK = false;
    var button = document.getElementsByName("button-submit")[0];
    var emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    businessName.addEventListener("blur", function() {
        businessNameOk = true;
        if(businessName.value.length <= 3){
            businessNameOk = false;
            errorMessageBusinessName.style.display = 'flex';
        }

        for(i = 0; i < businessName.value.length; i++) {
            if (businessName.value.substring(i, i+1).toLowerCase() == 
            businessName.value.substring(i, i+1).toUpperCase()) {
                businessNameOk = false;
                errorMessageBusinessName.style.display = 'flex';
                break;
            }  
        }
    }, true);

    businessName.addEventListener("focus", function() {
        errorMessageBusinessName.style.display = 'none';
    }, true);

    email.addEventListener("blur", function() {
        emailOK = true;
        if(email.value.match(emailCheck) == null){
            emailOK = false;
            errorMessageEmail.style.display = 'flex';
        }
    }, true);

    email.addEventListener("focus", function(){
        errorMessageEmail.style.display = 'none';
    }, true);

    message.addEventListener("blur", function() {
        messageOk = true;
        if(message.value.length <= 3){
            messageOk = false;
            errorMessageMessage.style.display = 'flex';
        }

        for(i = 0; i < message.value.length; i++) {
            if (Number.isInteger(parseInt(message.value.substring(i, i+1))) == false){
                if (message.value.substring(i, i+1).toLowerCase() == 
                message.value.substring(i, i+1).toUpperCase()) {
                    errorMessageMessage.style.display = 'flex';
                    break;
                }
            }
        }
    }, true);

    message.addEventListener("focus", function(){
        errorMessageMessage.style.display = 'none';
    }, true);

    phoneNumber.addEventListener("blur", function() {
        phoneNumberOk = true;
        if(phoneNumber.value.length != 10){
            phoneNumberOk = false;
            errorMessagePhoneNumber.style.display = 'flex';
        }

        if(Number.isInteger(parseInt(phoneNumber.value))== false) {
            phoneNumberOk = false;
            errorMessagePhoneNumber.style.display = 'flex';
        }
    }, true);

    phoneNumber.addEventListener("focus", function() {
        errorMessagePhoneNumber.style.display = 'none';
    }, true);

    button.onclick = function(){
        formOK = true;

        if (businessNameOk == false){
            formOK = false;
            window.alert('Business name must contain more than 3 letters');
        }

        if (emailOK == false){
            formOK = false;
            window.alert('The email is not valid');
        }

        if (messageOk == false){
            formOK = false;
            window.alert('The message must contain more than 3 alphanumeric characters');
        }

        if (phoneNumberOk == false){
            formOK = false;
            window.alert('The phone number must contain 10 numbers');
        }

        if (formOK == true){
            window.alert('Your message has been successfully submitted');
        }
    }
}