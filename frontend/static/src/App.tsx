import React, { FC } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';

const App: FC = () => {
    return <>
        <Switch>
            <Route path="/cart" component={ Cart }/>
            <Route path="/wishlist" component={ Wishlist }/>
            <Route path="/" component={ Products }/>
        </Switch>
    </>;
};

export default App;
