import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { IProduct } from './models/IProduct';
import Product from './components/Product/Product';

const App: FC = () => {
    const [products, setProducts] = useState<IProduct[]>();

    useEffect(() => {
        fetch('/api/v1/product/')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const product = products?.map(p =>
                                      <Product key={ p.id } title={ p.title } price={ p.price }/>);

    return <>
        { product }
    </>;
};

export default App;
