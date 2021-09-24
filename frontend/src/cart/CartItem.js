import React from 'react';

function CartItem({ name, price, image, removeItem }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h3>{name}</h3>
                <h5>{price}</h5>
                <img src={image} alt={name} />
                <button onClick={removeItem}>Remove from Cart</button>
            </div>
        </div>
    )

}





export default CartItem;