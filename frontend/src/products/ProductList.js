import React from 'react';

import ProductCard from './ProductCard';

function ProductList() {
    return (
        <div>
            <div className='row center'>
              {data.products.map((product) => (
                <ProductCard key={product.key} product={product.key}></ProductCard>
              ))}
              </div>
          </div>
    )
}

export default ProductList;