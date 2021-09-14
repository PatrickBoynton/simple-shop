import React, { FC } from 'react';
import { IProduct } from '../../models/IProduct';
import './Product.css';
import { useHistory } from 'react-router';

const Product: FC<IProduct> = ({title, price, id, onDelete}: IProduct) => {
    // For testing purposes.
    const admin = true;
    const history = useHistory();

    const redirect = (event: any) => {
        history.push('/cart');
    };

    return <ul className="container">
        <li className="card">
            <h1>{ title }</h1>
            <p>${ price }</p>
            { admin ? (<>
                <button onClick={ (e) =>  redirect(e) }>Edit Product</button>
                <button onClick={ () => onDelete(id) }>Delete Product</button>
            </>) : null }
        </li>
    </ul>;
};

export default Product;