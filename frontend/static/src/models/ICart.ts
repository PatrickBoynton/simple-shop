import { IProduct } from './IProduct';

export interface ICart {
    product: IProduct[];
    total: number;
}