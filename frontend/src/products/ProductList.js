import React, { useState, useEffect } from 'react';

import SearchForm from '../common/SearchForm';
import PirateApi from '../common/Api';
import ProductCard from './ProductCard';
import LoadingSpinner from "../common/LoadingSpinner";


/**Show page with list of all products.
 * loads products from API.
 * re-loads filtered companies based on submit from search form.
 * routed to at /products
 */

function ProductList() {

  const [products, setProducts] = useState(null);

  useEffect(function getProductsOnMount() {
      search();
  }, []);

  async function search(name) {
    let products = await PirateApi.getProducts(name);
    setProducts(products);
  }

  if (!products) return <LoadingSpinner />;

  return (
    <div className="ProductList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {products.length
          ? (
              <div className="ProductList-list">
                {products.map(p => (
                    <ProductCard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        image={p.image}
                        price={p.price}
                    />
                ))}
              </div>
          ) : (
              <p className="lead">Sorry, no results were found!</p>
          )}
    </div>
);
}  

export default ProductList;