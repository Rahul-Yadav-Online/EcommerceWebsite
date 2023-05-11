class Products{
    constructor(name, price, description, imageUrl){
        this._name = name;
        this._price = price;
        this._description = description;
        this._imageurl = imageUrl;
    }
}

class ProductsList{
    constructor(productsArray){
        this._products = productsArray;
    }
}