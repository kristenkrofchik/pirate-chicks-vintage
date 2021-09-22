import React from 'react';

function Product(props) {
    const {product} = props;
    return (
        <div key={product.id} className='card'>
            <a href={`/product/${product.id}`}>
                <img className='medium' src={product.image} alt={product.name} />
            </a>
            <div className='card-body'>
                <a href={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                </a>
                <h4>{product.price}</h4>
            </div>
        </div>
    )
}

export default Product;