export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    thumbnail: string
}

export interface ProductResponse {
    total: number;
    skip: string;
    limit: string;
    products: Product[];
}

