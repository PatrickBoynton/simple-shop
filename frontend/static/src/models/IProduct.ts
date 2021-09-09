export interface IProduct {
    id: number;
    title: string;
    price: number;
    description?: string;
    onDelete: (id: number) => Promise<void>;
}