const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:1
},
{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:1
}
];

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