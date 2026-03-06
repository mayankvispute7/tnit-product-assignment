import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  // Use Next.js 'next' object to cache data for 1 hour
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 } 
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}   