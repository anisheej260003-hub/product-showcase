
import Greeting from "./components/Greeting";
import PriceTag from "./components/PriceTag";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>My Product Store</h1>

      <Greeting name="Anishee" />

      <PriceTag amount={499} />

      <ProductCard
        title="Wireless Headphones"
        price={1499}
        inStock={true}
      />

      <ProductCard
        title="Gaming Keyboard"
        price={2499}
        inStock={false}
      />
    </main>
  );
}