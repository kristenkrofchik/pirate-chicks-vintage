import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/Routes';
import Homepage from './home/Homepage';

function App() {
  return (
    <BrowserRouter>
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
        <Routes />
        <Homepage />
      </main>
      <footer className='row center'>All rights reserved</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
