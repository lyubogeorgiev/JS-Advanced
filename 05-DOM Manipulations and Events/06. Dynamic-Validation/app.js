function validate() {
    let email = document.getElementById("email");

    // const reg = /^([a-zA-Z0-9-]+)@([a-zA-Z]+).([a-z]{2-20)$/;

    email.addEventListener('change',() =>{
        const reg = /^(\w+)@(\w+).(\w+)$/;

        if (reg.test(email.value)){

            email.classList.remove("error");
        } else {

            email.classList.add("error");
        }
    });
}