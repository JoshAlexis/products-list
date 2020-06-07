import Store from './Store.js';
import Product from './Product.js';
import UI from './UI.js';

let product;

document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('product-name') != null){
        let name = localStorage.getItem('product-name');
        product = Store.searchByName(name);
        document.querySelector('#name').value = product.name;
        document.querySelector('#description').value = product.description;
        document.querySelector('#price').value = product.price;
    }
})

const form = document.querySelector('#formProduct');
form.addEventListener('submit', (e)=>{
    let name = document.querySelector('#name');
    let description = document.querySelector('#description');
    let price = document.querySelector('#price');

    const product = new Product(name.value, description.value, price.value);

    //Elements to insert message
    let container = document.getElementById('formContainer');
    let form = document.getElementById('formProduct');


    if(name.value === "" || description.value === "" || price.value === ""){
        UI.showMessage('Complete all the fields','danger',container,form);
    }else{
        Store.updateProduct(product);
        let fields = [
            name,
            description,
            price
        ];

        //Show message
        UI.showMessage('Product updated successfully','success',container,form);

        //Clean the inputs
        UI.cleanFields(fields);
    }

    e.preventDefault();
})