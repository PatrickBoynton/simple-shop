import React, { FC } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import Navigation from './components/Navigation/Navigation';
import CreateProduct from './components/CreateProduct/CreateProduct';

const App: FC = () => {
    return <>
        <Navigation/>
        <Switch>
            <Route path="/add-product" component={ CreateProduct }/>
            <Route path="/cart" component={ Cart }/>
            <Route path="/wishlist" component={ Wishlist }/>
            <Route path="/" component={ Products }/>
        </Switch>
    </>;
};

export default App;
