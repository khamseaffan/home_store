import { products } from "~/data/products";
import ProductCard from "~/components/ProductCard";

export function meta() {
  return [
    { title: "HomeStore - Browse Products" },
    { name: "description", content: "Explore featured products and top deals" },
  ];
}

export default function Home() {
  return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
  );
}
