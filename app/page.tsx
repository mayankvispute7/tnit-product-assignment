import { Suspense } from "react";
import { getProducts } from "@/lib/getProducts";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import ProductSkeleton from "@/components/ProductSkeleton";

// This inner component handles the data
async function ProductGrid() {
  try {
    const products = await getProducts();
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    );
  } catch (e) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold text-red-500">Oops! Connection error.</h2>
        <p className="text-gray-500">Unable to load products. Please try again later.</p>
      </div>
    );
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
            The Collection
          </h1>
          <p className="text-gray-500 md:text-lg">Modern essentials for your daily life.</p>
        </header>

        {/* Suspense shows the skeleton while ProductGrid is fetching */}
        <Suspense fallback={<ProductSkeleton />}>
          <ProductGrid />
        </Suspense>

        <NewsletterForm />
      </div>
    </main>
  );
}