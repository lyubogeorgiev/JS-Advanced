function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;

    let tdList = document.querySelectorAll("tbody tr td:nth-of-type(2)");

    let result = document.getElementById("result");
    result.textContent = "Not found.";

    for (const td of tdList) {
        if (email == td.textContent){
            td.parentElement.remove();
            result.textContent = "Deleted.";
        }
    }
}