function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById('searchField').value;

      let tableRows = document.querySelectorAll('tbody tr');

      for (const tableRow of tableRows) {
         tableRow.classList.remove('select');
      }

      for (const tableRow of tableRows) {
         let tableCols = tableRow.childNodes;

         for (const tableCol of tableCols) {
            if (tableCol.textContent.includes(searchField)){
               tableCol.parentElement.classList.add("select");
            }
         }
      }

   }
}