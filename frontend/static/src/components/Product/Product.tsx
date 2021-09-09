import React, { FC } from 'react';
import { IProduct } from '../../models/IProduct';
import './Product.css';

const Product: FC<IProduct> = ({title, price, id, onDelete}: IProduct) => {
    // For testing purposes.
    const admin = true;

    return <ul className="container">
        <li className="card">
            <h1>{ title }</h1>
            <p>${ price }</p>
            {admin ? <button onClick={() => onDelete(id)}>Delete Product</button> : null}
        </li>
    </ul>;
};

export default Product;