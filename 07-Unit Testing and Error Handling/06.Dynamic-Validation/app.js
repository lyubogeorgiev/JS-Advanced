function validate() {
    let email = document.getElementById('email');

    email.addEventListener('change', validate);

    function validate(e){
        let emailRegex = /^[a-zA-z0-9\._-]+@(\w+)(\.\w+)?$/g;
        let emailText = e.target.value;

        if (!emailRegex.test(emailText)){
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }
    }
}