let cart = JSON.parse(localStorage.getItem('cart'))
// ||
// [{
//   productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//   quantity:1
// },
// {
//   productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//   quantity:8
// }
// ];

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

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
  saveToStorage()
}

function updateCart(){
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity
    
}

function removeProduct(productId){
  newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem)
    }
  })
  cart = newCart;
  saveToStorage()
}