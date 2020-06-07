class Store{
    /**
     * Retrives the products from localStorage, if they exists.
     */
    static getProducts(){
        let products;
        if(localStorage.getItem('products') === null){
            products = [];
        }else{
            products = JSON.parse(localStorage.getItem('products'));
        }
        return products;
    }
    /**
     * Add a new product to the localStorage
     * @param {Object} product - An object type Product
     */
    static addProduct(product){
        const products = this.getProducts();
        products.push(product);
        localStorage.setItem('products',JSON.stringify(products));
    }
    /**
     * Deletes one product from the localStorage using the name
     * @param {String} name - The name of the product to delete 
     */
    static deleteProduct(name){
        let products = this.getProducts();
        products.forEach((product, index) => {
            if(product.name === name){
                products.splice(index, 1);
            }
        });
        localStorage.setItem('products',JSON.stringify(products));
    }
    /**
     * Updates a product from the localStorage using the name of the product.
     * The name of the product cannot be changed.
     * @param {Object} product - An object type Product
     */
    static updateProduct(product){
        let products = this.getProducts();
        console.log(product);
        products.forEach((item, index) => {
            if(item.name === product.name){
                products.splice(index, 1, product);
            }
        });
        localStorage.setItem('products',JSON.stringify(products));
    }
    /**
     * Search into the localStorage using the name
     * @param {String} name - The name of the product to search
     */
    static searchByName(name){
        let products = this.getProducts();
        let product;
        products.forEach(item => {
            if(item.name ===  name){
                product = item;
            }
        });
        return product;
    }
}

export default Store