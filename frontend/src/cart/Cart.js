import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Cart() {
    const {id} = useParams();

    return (
        <div>
            <h1>Add to Shopping Cart</h1>
            <p>{id}</p>
        </div>
    )
}


export default Cart;