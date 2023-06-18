export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number
}

export interface ProductResponse {
    total: number;
    skip: string;
    limit: string;
    products: Product[];
}

