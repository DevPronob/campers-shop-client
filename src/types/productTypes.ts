export type TProduct = {
    _id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    ratings: number;
    imageUrls: string[];
    stock: number;
    isFeatured: boolean;
    isBestSelling: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type TCartItem = {
    _id: string;
    productId: TProduct;
    quantity: number;
    __v: number;
};
export type CartData = {
    data: TCartItem[];
};