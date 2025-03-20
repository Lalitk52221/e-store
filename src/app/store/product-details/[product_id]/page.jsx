import Container from "@/Components/home/Container";
import { getProducts } from "@/library";
import React from "react";

export default async function ProductDetails({ params }) {
  const product = await getProducts(params.product_id);
  console.log(product.image)
  // console.log(params.product_id)
  return (
    <Container className="py-12 px-4 col-span-2">
      <div className="flex flex-col md:flex-row items-start bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-cover"
        />
      </div>
    </Container>
  );
}
