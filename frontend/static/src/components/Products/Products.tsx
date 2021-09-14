import React, { FC, useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
import { IProduct } from '../../models/IProduct';

const Products: FC = () => {
    // This is temporary
    const [products, setProducts] = useState<IProduct[]>([]);

    const deleteProducts = async (id: number): Promise<void> => {
        await fetch(`api/v1/product/${ id }/delete`, {
            method: 'DELETE'
        });
    };

    const fetchProducts = async (url: string): Promise<void> => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts('/api/v1/product');
    }, []);

    const productDisplay = products.map(prod => <Product key={ prod.id }
                                                         id={ prod.id }
                                                         onDelete={ deleteProducts }
                                                         title={ prod.title }
                                                         price={ prod.price }/>);
    return <div className="container">{ productDisplay }</div>;
};

export default Products;