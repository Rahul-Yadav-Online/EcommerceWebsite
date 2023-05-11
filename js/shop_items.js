let allProducts = productCatelog.products;

let res = '';
let cnt = 0;
for (let i=0; i<allProducts.length; i++){
    if(i%3 == 0){
        res+=cardGroupTop();
        cnt = 0;
    }
    res+=card(allProducts[i].imageUrl, allProducts[i].name, allProducts[i].price);
    if(cnt++ == 2){
        res+=cardGroupBottom();
    }
}

document.getElementById('shop-items').innerHTML = res;

