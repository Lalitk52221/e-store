import Container from "./Container";
import ProductBox from "../ProductBox";

export default async function FeaturedProduct() {
  const products = await fetch("https://fakestoreapi.com/products?limit=5");
  // const products = await fetch("https://fakestoreapi.com/products?limit=5");
  const productData = await products.json();

  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold">Featured Products</h1>
        <div className="grid grid-cols-5 gap-3 my-4">
          {productData.map((product) => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
