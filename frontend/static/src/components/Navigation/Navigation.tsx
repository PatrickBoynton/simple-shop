import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Navigation: FC = () => {
    return <header>
        <nav>
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to='/add-product'>Add Product</Link>
        </nav>
    </header>;
};

export default Navigation;