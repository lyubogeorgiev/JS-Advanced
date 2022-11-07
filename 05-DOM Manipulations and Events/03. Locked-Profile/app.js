function lockedProfile() {
    let buttons = document.querySelectorAll("div.profile button");

    for (const button of buttons) {
        button.addEventListener('click', showProfile);
    }

    function showProfile(e){
        //check if radio is set to lock or unlock

        let radioButtons = e.target.parentElement.querySelectorAll("input[type='radio']");

        if (radioButtons[1].checked && e.target.textContent === "Show more"){
            e.target.parentElement.querySelector('div').style.display = "block";
            e.target.textContent = "Hide it";
        } else if (radioButtons[1].checked && e.target.textContent === "Hide it"){
            e.target.parentElement.querySelector('div').style.display = "none";
            e.target.textContent = "Show more";
        }
    }
}