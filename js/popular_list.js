let popularItems = productCatelog.products.slice(0,3);

let res = '';
res+=cardGroupTop();
for(let i in popularItems){
    res+=card(popularItems[i].imageUrl, popularItems[i].name, popularItems[i].price);
}
res+=cardGroupBottom();

document.getElementById('popular-items').innerHTML = res;

