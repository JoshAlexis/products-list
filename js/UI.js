import Store from './Store.js';
import Factory from './Factory.js';

class UI{
    /**
     * Create elements to show in the main page
     * @param {Element} list - The element that works as container for the 
     *                       products elements
     */
    static showBooks(list){
        const products = Store.getProducts();
        products.forEach((product)=>{
            this.addProductToList(product,list);
        });
    }
    /**
     * Add the values of a product into an element to 
     * show it in the main page
     * @param {Object} product - An object type Product 
     * @param {Element} list - The element to insert the content
     */
    static addProductToList(product, list){
        let article = Factory.createArticle();
        let divCard = Factory.createCard();
        let cardHeader = Factory.createCardHeader();
        let cardBody = Factory.createCardBody();
        let cardFooter = Factory.createCardFooter();
        let btnDelete = Factory.createButton('danger','btn-delete', 'Delete');
        let btnEdit = Factory.createButton('primary','btn-edit', 'Edit');
        let hidden = Factory.createHidden(product.id);


        cardHeader.innerHTML = `<h5>${product.name}</h5>`;
        cardBody.innerHTML = `<p>${product.description}</p>`;
        cardFooter.innerHTML = `<p>\$${product.price}</p>`;
        cardFooter.appendChild(btnEdit);
        cardFooter.appendChild(btnDelete);

        divCard.appendChild(cardHeader);
        divCard.appendChild(cardBody);
        divCard.appendChild(cardFooter);
        divCard.appendChild(hidden);
        
        article.appendChild(divCard);

        list.appendChild(article);
    }
    /**
     * Add a element to show a message and dissapear time later.
     * @param {String} message  The message to show
     * @param {String} type - The class of boostrap for alerts. Example: success or danger
     * @param {Element} container - The parent element to insert the message
     * @param {Element} form - The element before to show the message
     */
    static showMessage(message, type, container, form){
        const div = document.createElement('div');
        div.classList = `alert alert-${type}`;
        div.appendChild(document.createTextNode(message));
        container.insertBefore(div, form);

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        }, 2000);
    }
    /**
     * Clean the inputs. Only those that have value property.
     * @param {Array} fiels - Array of inputs to clean
     */
    static cleanFields(fiels){
        fiels.forEach(field => {
            field.value = '';
        })
    }
    /**
     * Remove an element from the document with an animation
     * @param {Element} elem - The element to remove 
     */
    static deleteProduct(elem){
        if(elem.classList.contains('btn-danger')){
            elem.parentElement.parentElement.parentElement.classList.add('delete');
            elem.addEventListener('transitionend', ()=>{
                elem.parentElement.parentElement.parentElement.remove();
            });
        }
    }
    /**
     * Insert a input hidden with the id of the product
     * to edit
     * @param {String} id - The id of the product
     * @param {Element} form - The from to insert the element
     * @param {Element} before - The element after the insert the input hidden
     */
    static appendHiddenInput(id,form,before){
        let hidden = Factory.createHidden(id);
        hidden.setAttribute('id','prod-id');
        console.log(before);
        form.insertBefore(hidden, before);
    }
}

export default UI