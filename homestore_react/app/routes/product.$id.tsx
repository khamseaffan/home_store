import { useParams } from "react-router";
import { products } from "~/data/products";
import Button from "~/components/Button";

export default function ProductDetail() {
    const { id } = useParams();

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
                <p className="text-gray-500 mt-2">We couldn’t find a product with ID: {id}</p>
            </div>
        );
    }

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Image */}
                <img
                    src={product.imagesUrls?.[0] || "/placeholder.png"}
                    alt={product.productName}
                    className="w-full h-96 object-cover rounded-lg shadow-sm"
                />

                {/* Info */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.productName}</h1>
                    <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                    <p className="text-xl font-semibold text-primary-600 mb-6">${product.price?.toFixed(2)}</p>

                    <p className="text-gray-700 mb-6">{product.description}</p>

                    <Button variant="primary" size="md" fullWidth>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </main>
    );
}
