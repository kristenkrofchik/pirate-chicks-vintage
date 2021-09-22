import Product from './products/Product';

function App() {
  return (
    <div class='grid-container'>
    <header>
        <div>
            <a href='index.html'>Pirate Chicks Vintage</a>
        </div>
        <div>
            <a href='cart.html'>Shopping Cart</a>
            <a href='login.html'>Login</a>
        </div>
    </header>
    <main>
        <div>
          <div className='row center'>
            {data.products.map((product) => (
              <Product key={key} product={product}></Product>
            ))}
            </div>
        </div>
    </main>
    <footer className='row center'>All rights reserved</footer>
  </div>
  );
}

export default App;
