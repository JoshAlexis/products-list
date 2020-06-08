import UI from "./UI.js"
import Store from "./Store.js";
import Seeder from './Seeder.js';

document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('products') === null || localStorage.getItem('products').length == 0)
        Seeder.generateProducts(10);
    let list = document.getElementById('prod-list');
    UI.showBooks(list);
})

document.querySelector('.row').addEventListener('click', (e) => {
    let id = e.target.parentElement.nextSibling.value;
    if(e.target.classList.contains('btn-danger')){
        UI.deleteProduct(e.target);
        Store.deleteProduct(id);
    }else if(e.target.classList.contains('btn-primary')){
        localStorage.setItem('product-id',id);
        window.location.href = '/edit.html';
    }
});