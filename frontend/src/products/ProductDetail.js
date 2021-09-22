import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import PirateApi from './api';


function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(function getProductInfo() {
        async function getProduct() {
            setProduct(await PirateApi.getCompany(id))
        }
        getProduct();
    }, [id]);

    return (
        <div>
        <Link to='/products'>Back to Results</Link>
        <div className='row top'>
            <div className='col-2'>
                <img className='large' src={product.image} alt={product.name}></img>
            </div>
            <div className='col-1'>
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <p>{product.description}</p>
                    </li>
                    <li>
                        <span>Condition: {product.condition}</span>
                    </li>
                    <li>
                        <span>Era: {product.era}</span>
                    </li>
                    <li>
                        <span>Price: ${product.price}</span>
                    </li>
                </ul>
            </div>
            <div className='col-1'>
                <div className='card card-body'>
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div>
                                    {product.quantity > 0 ? (
                                    <span className='success'>In Stock</span>) : (
                                    <span className='error'>Sold Out</span>
                                    )}
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className='primary block'>Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductDetail;