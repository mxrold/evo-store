import { useRouter } from "next/router";

export default function ProductItem(): JSX.Element {
  const { query: { productItem } } = useRouter();

  return (
    <main>
      <h2>Product item: {productItem}</h2>
    </main>
  );
}
