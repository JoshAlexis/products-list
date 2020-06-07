import UI from "./UI.js"
import Store from "./Store.js";

document.addEventListener('DOMContentLoaded',()=>{
    let list = document.getElementById('prod-list');
    UI.showBooks(list);
})

document.querySelector('.row').addEventListener('click', (e) => {
    let name = e.target.parentElement.previousSibling.previousSibling.firstChild.innerText;
    if(e.target.classList.contains('btn-danger')){
        UI.deleteProduct(e.target);
        Store.deleteProduct(name);
    }else if(e.target.classList.contains('btn-primary')){
        localStorage.setItem('product-name',name);
        window.location.href = '/edit.html';
    }
});