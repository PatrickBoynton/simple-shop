import React, { FC, FormEvent, useState } from 'react';
import './CreateProduct.css';
import { useInput } from '../../hooks/useInput';

const CreateProduct: FC = () => {
    const title = useInput('');
    const price = useInput(0);
    const description = useInput('');

    const [product, setProduct] = useState({});

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        setProduct({title: title.value.toString(), price: +price.value, description: description.value.toString()});
        fetchPostProduct();
    };

    const fetchPostProduct = async () => {
        await fetch('api/v1/product/create/', {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
    };

    return <form onSubmit={ handleSubmit }>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={ title.onChange } value={ title.value }/>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" onChange={ price.onChange } value={ price.value }/>
        <label htmlFor="description">Description</label>
        <textarea name="description" cols={ 20 } rows={ 3 } onChange={ description.onChange }
                  value={ description.value }>
        </textarea>
        <button type="submit">Add Product</button>
    </form>;
};

export default CreateProduct;