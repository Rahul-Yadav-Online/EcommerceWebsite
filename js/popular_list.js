let popularItems = [];
let keys=Object.keys(localStorage);
for(let i=0; i<3 ; i++){
    popularItems.push(JSON.parse(localStorage.getItem(i)));
}

let res = '';
res+=cardGroupTop();
for(let i in popularItems){
    res+=card(popularItems[i]._imageUrl, popularItems[i]._name, popularItems[i]._price);
}
res+=cardGroupBottom();

document.getElementById('popular-items').innerHTML = res;

