function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');

    let isCompany = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');

    let companyNumber = document.getElementById('companyNumber');

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validateFields);

    isCompany.addEventListener('change', isCompanyVisibility);

    function isCompanyVisibility(e){
        if (e.target.checked){
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }


    function validateFields(e){
        e.preventDefault();

        let isUserNameValid = testUsername();
        let isEmailValid = testEmail();
        let isPasswordValid = testPassword(password);
        let isConfirmPasswordValid = testConfirmPassword();

        let isCompanyDisplayed = companyInfo.style.display === 'block';

        let isCompanyNumberValid = false;

        if (isCompanyDisplayed){
            isCompanyNumberValid = testCompanyNumber();
        }

        let validElement = document.getElementById('valid');

        // console.log(isUserNameValid);
        // console.log(isEmailValid);
        // console.log(isPasswordValid);
        // console.log(isConfirmPasswordValid);
        // console.log(!isCompanyDisplayed || isCompanyNumberValid);

        if (isUserNameValid && isEmailValid && isPasswordValid
            &&isConfirmPasswordValid
            && (!isCompanyDisplayed || isCompanyNumberValid)){


            validElement.style.display = 'block';
        } else {
            validElement.style.display = 'none';
        }
    }

    function testUsername(){
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/g;

        if (!usernameRegex.test(username.value)){
            username.style.borderColor = 'red';
            return false;
        } else {
            username.style.border = 'none';
            return true;
        }
    }

    function testEmail(){
        // let emailRegex = /^[a-zA-z0-9\._-]+@(\w+)(\.\w+)?$/g;
        // let emailRegex = /^.+@.+\..+(\..+)?$/g;
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/g;

        if (!emailRegex.test(email.value)){
            email.style.borderColor = 'red';
            return false;
        } else {
            email.style.border = 'none';
            return true;
        }
    }

    function testPassword(element){
        let passwordRegex = /^[a-zA-Z0-9_]{5,15}$/g;

        if (!passwordRegex.test(element.value)){
            element.style.borderColor = 'red';
            return false;
        } else {
            element.style.border = 'none';
            return true;
        }
    }

    function testConfirmPassword(){
        let isConfirmPasswordValid = testPassword(confirmPassword);

        // console.log(`isConfirmPasswordValid: ${isConfirmPasswordValid}`);
        // console.log(password.value === confirmPassword.value);
        //
        // console.log(`password: ${password}`);
        // console.log(`confirmPassword: ${confirmPassword}`);
        if (password.value !== confirmPassword.value){
            // password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';

            return false;
        }

        return isConfirmPasswordValid;
    }

    function testCompanyNumber(){
        let companyNumberRegex = /^([1-9][0-9][0-9][0-9])$/g;

        if (!companyNumberRegex.test(companyNumber.value)){
            companyNumber.style.borderColor = 'red';
            return false;
        } else {
            companyNumber.style.border = 'none';
            return true;
        }
    }
}
