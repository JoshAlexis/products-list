import './faker.min.js';
import Product from './Product.js';
//Creates products with random data using chanceJS
class Seeder {
    static generateProducts(cant) {
        let products = [];
        for (let i = 0; i < cant; i++) {
            let prod = new Product(
                i + 1,
                faker.commerce.productName(),
                faker.lorem.sentences(),
                faker.commerce.price()
            )
            products.push(prod);
        }
        localStorage.setItem('products', JSON.stringify(products));
    }
}

export default Seeder;