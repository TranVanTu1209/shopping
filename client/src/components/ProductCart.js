import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

const ProductCart = ({ cart, removeFromCart, clearCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState('');
  const [email, setEnail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const onCheckoutHandler = e => {
    e.preventDefault();
  }
  return (
    <aside className="productCart">
      <div className="cart__header">
        <h3>Your basket</h3>
        {
          cart.length > 0 && <button className="btn clear__btn" onClick={clearCart}>Clear cart</button>
        }
      </div>
      <p> You have {cart.length} products in the cart </p>
      <div className="cart__items">
        {
          cart.map(c => <Fade key={c._id} left cascade>
            <div className="cart__item" key={c._id}>
              <img src={c.image} alt={c.title} />
              <div>
                <p> {c.title} </p>
                <p> $ <strong> {c.price} </strong> </p>
                <button onClick={() => removeFromCart(c._id)}>Remove</button>
              </div>
            </div>
          </Fade>
          )
        }
      </div>
      <div className="cart__total">
        <p className="subtotal">
          Total :   $ <strong> {cart.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}</strong>
        </p>
        {
          cart.length > 0 && <button className="btn" onClick={() => setShowCheckout(!showCheckout)}>
            {showCheckout ? 'Cancel ' : 'Proceed to '} checkout</button>
        }
      </div>
      {
        showCheckout && <Fade right cascade>
          <form className="checkout__form" onSubmit={onCheckoutHandler}>
            <input type="text" placeholder="Your name" required value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Your email" required value={email} onChange={e => setEnail(e.target.value)} />
            <input type="text" placeholder="Your address" required value={address} onChange={e => setAddress(e.target.value)} />
            <input type="text" placeholder="Your note(message)" value={message} onChange={e => setMessage(e.target.value)} />
            <input type="submit" value="Checkout" className="btn checkout__btn" />
          </form>
        </Fade>
      }
    </aside>
  )
}

export default ProductCart;
