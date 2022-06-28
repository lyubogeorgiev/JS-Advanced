function extractText() {
    let items = document.querySelectorAll('ul>li');

    for (const item of items) {
        document.getElementById('result').textContent += `\n${item.textContent}`;
        console.log(item.textContent);
    }

    console.log(Array.from(items));
}