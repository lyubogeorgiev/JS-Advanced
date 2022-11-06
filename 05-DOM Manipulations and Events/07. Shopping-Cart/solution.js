function solve() {
   let buttonsList = document.querySelectorAll('.add-product');

    for (const button of buttonsList) {
        button.addEventListener('click', addObject);
    }
       // .forEach(button => button.addEventListener('click', addObject));

   let textArea = document.querySelector("textarea");

   let objects = [];

   function addObject(e){

       let productName = e.target.parentElement.parentElement.querySelector('.product-title').textContent;
       let productPrice =
           Number(e.target.parentElement.parentElement.querySelector('.product-line-price').textContent);

       let object = {name: productName, price: productPrice};

       if (!objects.some(object => object.name === productName)){
           objects.push(object);
           textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

       }
   }

   document.querySelector(".checkout").addEventListener('click', calculateTotal);

   function calculateTotal(){
       for (const button of buttonsList) {
           button.disabled = true;
       }

       // document.querySelectorAll('.add-product')
       //     .forEach(button => button.disabled = true);

       let total = objects.reduce((acc, currentValue) => acc + currentValue.price, 0);

       textArea.textContent += `You bought ${objects.map(x => x.name).join(', ')} for ${total.toFixed(2)}.`;
   }
}