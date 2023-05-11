class Products{
    constructor(name, price, imageUrl='', description=''){
        this._name = name;
        this._price = price;
        this._imageUrl = imageUrl;
        this._description = description;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get imageUrl(){
        return this._imageUrl;
    }

    get description(){
        return this._description;
    }

    set imageUrl(url){
        this._imageUrl = url;
    }
}

let productItems = [
    new Products("Bon Voyage", 52349, './images/Product1.png'),
    new Products("Sea Smasher", 51399, './images/Product2.png'),
    new Products("Kings Men XI", 53000, './images/Product3.png'),
    new Products("Bes Tornado", 46299, './images/Product4.png'),
    new Products("Rolex GMT", 60000, './images/Product5.png')
];

for(let i in productItems){
    localStorage.setItem(i, JSON.stringify(productItems[i]));
}

function addProductDynamic(){
    let name = document.getElementById('product-name').value;
    let desc = document.getElementById('description').value;
    let price = Number(document.getElementById('price').value);
    let imageUrl = document.getElementById('image-file-url').value;
    imageUrl  = './images/'+imageUrl.split("\\")[2];
    let newProd = new Products(name, price,imageUrl,desc);
    let index = Object.keys(localStorage).length;
    localStorage.setItem(index, JSON.stringify(newProd));
}