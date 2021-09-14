import {useState, useEffect} from 'react';
import { IProduct } from '../models/IProduct';

export const useFetchProducts = (url: string) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = async (url: string): Promise<void> => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts(url);
    }, [url]);
    return products;
}