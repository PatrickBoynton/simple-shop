import React, { FC, useEffect, useState } from 'react';
import Product from '../Product/Product';
import { IProduct } from '../../models/IProduct';

const Products: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = async (): Promise<void> => {
        const response = await fetch('/api/v1/product/');
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const productDisplay = products.map(prod => <Product key={ prod.id }
                                                         title={ prod.title }
                                                         price={ prod.price }/>);
    return <>{ productDisplay }</>;
};

export default Products;