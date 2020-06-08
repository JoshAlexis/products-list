import Store from './Store.js';
import UI from './UI.js';
import Product from './Product.js';
import './chance.js';


const form = document.getElementById('formProduct');
form.addEventListener('submit', (e)=>{

    const name = document.querySelector('#name');
    const description = document.querySelector('#description');
    const price = document.querySelector('#price');
    let id = chance.guid();
    //Intance of Product
    const product = new Product(id,name.value, description.value, price.value);

    //Elements to insert message
    let container = document.getElementById('formContainer');
    let form = document.getElementById('formProduct');


    if(name.value === "" || description.value === "" || price.value === ""){
        UI.showMessage('Complete all the fields','danger',container,form);
    }else{
        Store.addProduct(product);
        let fields = [
            name,
            description,
            price
        ];

        //Show message
        UI.showMessage('Product added successfully','success',container,form);

        //Clean the inputs
        UI.cleanFields(fields);
    }

    e.preventDefault();
});
