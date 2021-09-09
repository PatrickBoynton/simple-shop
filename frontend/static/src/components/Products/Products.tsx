import React, { FC, useState } from 'react';
import Product from '../Product/Product';
import { useFetchProducts } from '../../hooks/useProduct';

const Products: FC = () => {
    const products = useFetchProducts();

    const deleteProducts = async (id: number): Promise<void> => {
        await fetch(`api/v1/product/${ id }/delete`, {
            method: 'DELETE'
        });
    };

    const productDisplay = products.map(prod => <Product key={ prod.id }
                                                         id={ prod.id }
                                                         onDelete={ deleteProducts }
                                                         title={ prod.title }
                                                         price={ prod.price }/>);
    return <>{ productDisplay }</>;
};

export default Products;