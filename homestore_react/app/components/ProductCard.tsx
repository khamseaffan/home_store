import React from 'react';
import type { Product } from '~/types/product';
import Button from './Button';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <img
                src={product.imagesUrls?.[0] || '/placeholder.png'}
                alt={product.productName}
                className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-900">{product.productName}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <p className="text-primary-600 font-bold text-lg mb-3">${product.price?.toFixed(2)}</p>
            <Button
                variant="primary"
                size="sm"
                onClick={() => onAddToCart?.(product.id)}
                fullWidth
            >
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;
