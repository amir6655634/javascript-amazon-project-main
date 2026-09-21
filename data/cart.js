const cart = [];

function addToCart(productId){
    let matchId;

  cart.forEach((item) => {
    if(productId === item.productId){
      matchId = item
    }
  });

  if(matchId){
    matchId.quantity++;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    })
  }
}

function updateCart(){
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity
    
}