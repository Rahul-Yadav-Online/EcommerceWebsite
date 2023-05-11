let allProducts = [];
for(let i=0; i<Object.keys(localStorage).length ; i++){
    allProducts.push(JSON.parse(localStorage.getItem(i)));
}

let res = '';
let cnt = 0;
for (let i=0; i<allProducts.length; i++){
    if(i%3 == 0){
        res+=cardGroupTop();
        cnt = 0;
    }
    res+=card(allProducts[i]._imageUrl, allProducts[i]._name, Number(allProducts[i]._price));
    if(cnt++ == 2){
        res+=cardGroupBottom();
    }
}

document.getElementById('shop-items').innerHTML = res;

