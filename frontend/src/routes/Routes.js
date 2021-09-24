import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../home/Homepage";
import ProductList from "../products/ProductList";
import ProductDetail from '../products/ProductDetail';
import Cart from '../cart/Cart';
import LoginForm from '../auth/LoginForm';
import Profile from '../profile/Profile';
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

/**Routes for entire site.
 * Some pages will only be available to a logged in user and will be wrapped in <PrivateRoute>
 * Visiting a non-existent route will redirect to homepage
 */

function Routes({ login, signup }) {
    return (
        <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <Route exact path="/products">
            <ProductList />
          </Route>

          <Route exact path="/products/:id">
            <ProductDetail />
          </Route>

          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>

          <PrivateRoute path='/cart/:id?'>
            <Cart />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;