import React from 'react'
import {
       BasketAsideCont,
       BasketHeadline,
       ButtonContainer,
       CartItems,
       CustomButton,
       IfCartDiv,
       InsideCartItems, 
       ItemTitle,
       Minus,
        Plus,Buttons
   } from './BasketElements';
   import Header from './Header';

const Basket = (props) =>  {
    const {cartItems, onAdd, onRemove} = props;
    // subtotal of cart
    const itemsPrice = cartItems.reduce((accumulator, currentItem) =>
     accumulator + currentItem.price * currentItem.qty, 0)//0 is default 
     //tax price 
     const taxPrice = itemsPrice * 0.02;
     const shippingPrice = itemsPrice > 2000 ? 0 : 50;
     //if its over 2000 make it free otherwhise 50 bucks
     const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <BasketAsideCont id='cart'>
            <Header 
        countCartItems={cartItems.length}/>
        <BasketHeadline>Cart Items</BasketHeadline>
        <IfCartDiv>
            {cartItems.lenght === 0 && <div>Cart is Empty</div>}
            </IfCartDiv>
            {cartItems.map((item) => (
              <CartItems key={item.id}>
                <ItemTitle>{item.title}</ItemTitle>
                <Buttons>
                  <CustomButton onClick={() => onAdd(item)}><Plus/></CustomButton>
                  <CustomButton onClick={() => onRemove(item)}><Minus/></CustomButton>
                </Buttons>
                <ButtonContainer> 
                  <InsideCartItems>
                  {item.name}  {item.qty} = {item.price.toFixed(2)}
                  </InsideCartItems>
                </ButtonContainer>
              </CartItems>

            ))}
            {cartItems.lenght !== 0 && (
              <>
                <hr />
                <div>
                  <div><h3>Items Price</h3></div>
                  <div><h2>${itemsPrice.toFixed(2)}</h2></div>
                </div>
                <hr />
                <div>
                  <div><h3>Tax Price</h3></div>
                  <div><h2>${taxPrice.toFixed(2)}</h2></div>
                </div>
                <hr />
                <div>
                  <div><h3>Shipping Price</h3></div>
                  <div><h2>${shippingPrice.toFixed(2)}</h2></div>
                </div>
                <hr />
                <div>
                  <div><h2>Total Price</h2></div>
                  <div><h2>${totalPrice.toFixed(2)}</h2></div>
                </div>

                <hr />
                <div>
                  <h2>
                    <CustomButton onClick={() => alert("Finished Shopping?")}>Checkout</CustomButton>
                  </h2>
                </div>
              </>
            )}
    </BasketAsideCont>
  )
}

export default Basket
