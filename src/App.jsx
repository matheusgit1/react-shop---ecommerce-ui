import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Routes } from './routes'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { ContextProvider } from './contexts/contextProvider'

const App = () => {
  return (
    <React.Fragment>
      <ContextProvider>
        <BrowserRouter >
          <Switch>
            <Route exact path={Routes.Home.path} component={Home} />
            <Route exact path={`${Routes.Product.path}/:product_id`} component={Product} />
            <Route exact path={`${Routes.ProductList.path}/:category`} component={ProductList} />
            <Route exact path={Routes.Register.path} component={Register} />
            <Route exact path={Routes.Login.path} component={Login} />
            <Route exact path={Routes.Cart.path} component={Cart} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </React.Fragment>
  );

};

export default App;