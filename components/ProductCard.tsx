import { Product } from "@/types/product";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1">
      {/* Aspect Ratio Container for Image */}
      <div className="aspect-square overflow-hidden bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-600">
          {product.category}
        </span>
        
        <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
          {product.title}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-black text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <button className="rounded-full bg-gray-50 p-2 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}