function renderOrderPayment(){
   let productPriceCents = 0
   let shippingPrice = 0
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId)
            productPriceCents += product.priceCents * cartItem.quantity
            const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)
            shippingPrice += deliveryOption.priceCents
    })
    const priceBeforeTax = productPriceCents + shippingPrice
    const tax = priceBeforeTax * 0.1
    const finalPrice = tax + priceBeforeTax
    let orderSummeryHTML = ''
    orderSummeryHTML += 
    `
        <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${(Math.round(productPriceCents) / 100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${(Math.round(shippingPrice) / 100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${(Math.round(priceBeforeTax) / 100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${(Math.round(tax) / 100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${(Math.round(finalPrice) / 100).toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `
    document.querySelector(".js-payment-summery").innerHTML = orderSummeryHTML
    renderOrderPayment()
}    
