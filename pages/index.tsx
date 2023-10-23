import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function Home(): JSX.Element {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <main>
      <Navbar />
      <h1>Avo Store</h1>
      {
        products?.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))
      }
    </main>
  );
}
