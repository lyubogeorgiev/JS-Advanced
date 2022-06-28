function extract(content) {
    let text = document.getElementById(content).textContent;

    let pattern = /\(([^(]+)\)/g;

    let matches = text.matchAll(pattern);

    let result = [];

    for (const match of matches) {
        result.push(match[1]);
    }

    return result.join('; ');
}