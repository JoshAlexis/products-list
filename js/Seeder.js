import './chance.js';
import Product from './Product.js';
//Creates products with random data using chanceJS
class Seeder{
    static generateProducts(cant){
        let products = [];
        for(let i=0;i<cant;i++){
            let prod = new Product(
                chance.guid(),
                'Product ' + chance.syllable(),
                chance.sentence({words: 15}),
                chance.integer({min: 80, max: 2000})
            )
            products.push(prod);
        }
        localStorage.setItem('products',JSON.stringify(products));
    }
}

export default Seeder;