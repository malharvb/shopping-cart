import React, { useState, useEffect } from 'react';
import '../styles/cart.css';

function Cart({ cartItems }) {
  const [items, setItems] = useState([]);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  useEffect(() => {
    const calcTotalAndItems = (cartItemsCopy) => {
      setCheckoutTotal(0);
      const sortedItems = [];

      cartItemsCopy.forEach((cartItem) => {
        sortedItems.push(cartItem);
        setCheckoutTotal((prevTotal) => (prevTotal + (cartItem.price * cartItem.quantity)));
      });

      return sortedItems;
    };

    const currItemsList = calcTotalAndItems(cartItems);

    setItems(currItemsList);
  }, []);

  return (
    <>
      <div className="items-display">
        {items.map((item) => (

          <div className="cart-item" key={item.id}>
            <div className="sub-wrapper">
              <img className="shop-item-img" src={item.image} alt={item.description} />
              <div className="item-title">{item.title}</div>
            </div>
            <div className="sub-wrapper">
              <div className="item-price">
                $
                {item.price}
              </div>
              <div className="item-quantity">
                Quantity:
                {' '}
                {item.quantity}
              </div>
            </div>
          </div>

        ))}
      </div>
      <div className="checkout-total">
        Checkout Total:
        {' '}
        {checkoutTotal}
      </div>
      <button type="button" className="checkout-btn">Check Out</button>
    </>
  );
}

export default Cart;
