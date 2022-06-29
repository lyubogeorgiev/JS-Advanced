function toggle() {
    let buttonText = document.getElementsByClassName('button')[0].textContent;

    if (buttonText === 'More'){
        document.getElementsByClassName('button')[0].textContent = 'Less';

        document.getElementById('extra').style.display = 'block';
    } else {
        document.getElementsByClassName('button')[0].textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}