import React, { FC } from 'react';
import './CreateProduct.css';

const CreateProduct: FC = () => {
    return <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title"/>
        <label htmlFor="price">Price</label>
        <input type="number" name="price"/>
        <label htmlFor="description">Description</label>
        <textarea name="description" cols={20} rows={3}>
        </textarea>
        <button type="submit">Add Product</button>
    </form>;
};

export default CreateProduct;