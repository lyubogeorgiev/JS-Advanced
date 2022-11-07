function create(words) {
   let contentElement = document.getElementById("content");



   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.textContent = word;

      div.appendChild(p);
      p.style.display = 'none';

      contentElement.appendChild(div);

      div.addEventListener('click', displayParagraph);

      function displayParagraph(e){
         e.target.querySelector('p').style.display = 'block';
         // e.target.childElement.style
         console.log(e.target);
      }
   }
}