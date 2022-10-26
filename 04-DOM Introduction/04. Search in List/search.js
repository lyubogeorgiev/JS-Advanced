function search() {
    let matches = 0;

    let boxElements = document.querySelectorAll('#towns li');
    let wordToSearch = document.getElementById('searchText').value;

    for (let child of boxElements) {
        if (child.textContent.includes(wordToSearch)){
            matches++;
            child.style.textDecoration = 'underline';
            child.style.fontWeight = 'bold';
        } else {
            child.style.textDecoration = 'none';
            child.style.fontWeight = 'normal';
        }
    }

    document.getElementById("result").textContent = `${matches} matches found`;
}
