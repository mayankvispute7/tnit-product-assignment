import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      // 'no-store' ensures the server fetches fresh data on every request
      // and doesn't get stuck with a 'cached' error from the build step.
      cache: 'no-store', 
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      }
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch products from API");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error details:", error);
    throw error;
  }
}