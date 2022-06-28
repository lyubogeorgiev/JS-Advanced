function subtract() {

    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    document.getElementById('result').textContent = String(firstNumber - secondNumber);
    console.log(firstNumber - secondNumber);
}