function cardGroupTop(){
    return '<div class="row my-5 py-2"><div class="col"><div class="row">';
}

function cardGroupBottom(){
    return '</div></div></div>'
}

function card(imageUrl, productName, productPrice=0){
    return '<div class="col-12 col-md-4"><div class="ucard"><a href="#"> \
    <img class="d-block" src="'+imageUrl+'" alt="" width="100%" height="400px"></a> \
    <div class="hov"><h5 class="d-flex justify-content-center mb-0 pb-2">Add to Cart</h5>\
    </div></div><h4 class="d-flex justify-content-center my-2">'+productName+'</h4> \
    <p class="d-flex justify-content-center">'+productPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })+'</p></div>';
}