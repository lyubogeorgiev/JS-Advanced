function attachGradientEvents() {
    const hoverElement = document.getElementById('gradient');

    function calculateGradient(e) {
        let percentage = Math.trunc(((e.offsetX / e.currentTarget.clientWidth ) * 100));

        resultElement.textContent = percentage + '%';
    }

    hoverElement.addEventListener('mousemove', calculateGradient);
    hoverElement.addEventListener('mouseout', () => {
       resultElement.textContent = '';
    });

    // console.log(hoverElement.offsetWidth);

    let resultElement = document.getElementById('result');

}
