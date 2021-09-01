import React, { FC } from 'react';
import { IProduct } from '../../models/IProduct';
import './Product.css';

const Product: FC<IProduct> = ({title, price}: IProduct) => {
    return <ul className="container">
        <li className="card">
            <h1>{ title }</h1>
            <p>${ price }</p>
        </li>
    </ul>;
};

export default Product;