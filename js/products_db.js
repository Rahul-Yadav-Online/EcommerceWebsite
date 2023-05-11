class Products{
    constructor(name='', price=0, description='', imageUrl=''){
        this._name = name;
        this._price = price;
        this._description = description;
        this._imageUrl = imageUrl;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get description(){
        return this._description;
    }

    get imageUrl(){
        return this._imageUrl;
    }
}

class ProductsList{
    constructor(productsArray=[]){
        this._products = productsArray;
    }

    get products(){
        return this._products;
    }

    addProduct(product){
        this._products.push();
    }

    getProductString(){
        return JSON.stringify(this._products); 
    }
}