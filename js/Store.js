class Store {
    /**
     * Retrive the products from localStorage, if they exists.
     */
    static getProducts() {
        let products;
        if (localStorage.getItem('products') === null) {
            products = [];
        } else {
            products = JSON.parse(localStorage.getItem('products'));
        }
        return products;
    }
    /**
     * Add a new product to the localStorage
     * @param {Object} product - An object type Product
     */
    static addProduct(product) {
        const products = this.getProducts();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }
    /**
     * Delete one product from the localStorage using the name
     * @param {String} id - The id of the product to delete 
     */
    static deleteProduct(id) {
        let products = this.getProducts();
        products.forEach((product, index) => {
            if (product.id == id) {
                console.log(product.id)
                products.splice(index, 1);
            }
        });
        localStorage.setItem('products', JSON.stringify(products));
    }
    /**
     * Update a product from the localStorage using the name of the product.
     * The name of the product cannot be changed.
     * @param {Object} product - An object type Product
     */
    static updateProduct(product) {
        let products = this.getProducts();
        products.forEach((item, index) => {
            if (item.id == product.id) {
                products.splice(index, 1, product);
            }
        });
        localStorage.setItem('products', JSON.stringify(products));
    }
    /**
     * Search into the localStorage using the name
     * @param {String} name - The name of the product to search
     */
    static searchByName(id) {
        let products = this.getProducts();
        let product;
        products.forEach(item => {
            if (item.id == id) {
                product = item;
            }
        });
        return product;
    }
}

export default Store