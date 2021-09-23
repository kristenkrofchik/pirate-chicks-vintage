import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({id, image, name, price}) {
    return (
        <Link className='ProductCard card' to={`/products/${id}`}>
            <div className='card-body'>
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <h4>{price}</h4>
            </div>
        </Link>
    )
}

export default ProductCard;