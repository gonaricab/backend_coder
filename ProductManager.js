let productos = [];
class ProductManager {
    constructor() {
        this.products = productos
    };
    addProduct (newProduct) {
        if(!newProduct.title || 
            !newProduct.description || 
            !newProduct.price ||
            !newProduct.thumbnail ||
            !newProduct.code ||
            !newProduct.stock) console.log("todos los campos son necesarios");
        
        let product = this.products.find( prod => prod.code === newProduct.code)
        if (product) return "Un producto con este código ya fue ingresado"

        if(this.products.length === 0) {
            return this.products.push({id: 1, ...newProduct})
        }
        return [...this.products, {id: this.products[this.products.length -1].id + 1,...newProduct}]

    };
    getProducts () {
        return this.products;
    };
    getProductById (id) {
        let product =  this.products.find(prod => prod.id === id)
        if(!product) return "not found"
        return product
    };
}

const product = new ProductManager ();

product.addProduct({title: "Producto1",
                    description: "esto es una descripción",
                    price: 1500 ,
                    thumbnail: "link" ,
                    code:001,
                    stock:100});
console.log(product.addProduct({title: "Producto1",
                    description: "esto es una descripción",
                    price: 1500 ,
                    thumbnail: "link" ,
                    code:001,
                    stock:100}));

console.log(product.getProducts())
