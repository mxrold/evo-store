import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ProductId(): JSX.Element {
  const { query: { productId } } = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`/api/avo/${productId}`)
      .then((response) => response.json())
      .then((res) => setProduct(res));
  }, []);

  return (
    <main>
      <h2>Product ID: {product?.id}</h2>
    </main>
  );
}
