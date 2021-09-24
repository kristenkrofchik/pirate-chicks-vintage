import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
import PirateApi from '../common/api';
import CartItem from './CartItem';



function Cart({id}) {
    let {currentUser} = useContext(UserContext);

    const [cart, setCart] = useState();

    async function addToCart() {
        setCart(await PirateApi.addToCart(currentUser.username, id));
    }

    return (
        <div>
            {cart.map(i => (
                <CartItem key={i.id} id ={i.id} name={i.name} price={i.price} image={i.image} addToCart={addToCart} />
        ))}
    </div>
    )
}


export default Cart;