export interface Product {
    id: string;
    productName: string;
    description: string;
    category: string;
    price?: number;
    quantity?: number;
    imagesUrls?: string[];
}
