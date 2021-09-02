import React, { FC } from 'react';
import Product from '../Product/Product';
import { useFetchProducts } from '../../hooks/useProduct';

const Products: FC = () => {
    const products = useFetchProducts();

    const productDisplay = products.map(prod => <Product key={ prod.id }
                                                         title={ prod.title }
                                                         price={ prod.price }/>);
    return <>{ productDisplay }</>;
};

export default Products;