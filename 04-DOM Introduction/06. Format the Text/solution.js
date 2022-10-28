function solve() {
  let text = document.getElementById('input').value;

  let textArray = text.split('.').filter(n => n);

  // console.log(textTokens);

  let outputElement = document.getElementById('output');

  // for (const textToken of textTokens) {
  //   const p = document.createElement('p');
  //   p.textContent = textToken;
  //   outputElement.appendChild(p);
  // }

  while (textArray.length > 0){
    const paragraphToAdd = textArray.splice(0,3);

    const p = document.createElement('p');
    p.textContent = paragraphToAdd.join('. ') + '.';

    outputElement.appendChild(p);
  }
}