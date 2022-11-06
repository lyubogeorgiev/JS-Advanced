function addItem() {
    const inputElement = document.getElementById('newItemText');

    let li = document.createElement('li');
    let a = document.createElement('a');

    a.href = "#";
    a.textContent = "[Delete]";


    const ul = document.getElementById('items');

    li.textContent = inputElement.value;

    a.addEventListener('click', (e) => {
       e.currentTarget.parentElement.remove();
    });
    // document.querySelectorAll('li a').forEach(e => e.addEventListener('click', (e) =>{
    //     e.currentTarget.parentNode.remove();
    // }));

    li.appendChild(a);
    ul.appendChild(li);

    inputElement.value = '';

}