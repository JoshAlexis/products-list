import UI from "./js/UI.js"
import Store from "./js/Store.js";
import Seeder from './js/Seeder.js';

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('products') === null || localStorage.getItem('products').length == 0)
        Seeder.generateProducts(10);
    let list = document.getElementById('prod-list');
    UI.showProducts(list);
})

document.querySelector('.row').addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    if (e.target.classList.contains('btn-danger')) {
        UI.deleteProduct(e.target);
        Store.deleteProduct(id);
    } else if (e.target.classList.contains('btn-primary')) {
        localStorage.setItem('product-id', id);
        if (window.location.href.length <= 32) window.location.href = '/edit.html';
        else window.location.href = window.location.href + "edit.html";
    }
});