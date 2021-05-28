import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/notfound/NotFound'
import Register from './pages/register/Register'
import { products } from './data'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ProductDetail from './pages/productDetail/ProductDetail'
import Products from './pages/products/Products'
function App() {

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/account/login">
            <Login />
          </Route>
          <Route exact path="/account/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home products={products} />
          </Route>
          <Route exact path="/product/:slug">
            <ProductDetail />
          </Route>
          <Route exact path="/collection/:category">
            <Products />
            </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
