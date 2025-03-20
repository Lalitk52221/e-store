// import Container from "@/Components/home/Container";
import ProductBox from "@/Components/ProductBox";
import { getProducts } from "@/library";
import React from "react";

export default function StorePage() {
  return (
    <ProductListing/>
  );
}


const ProductListing = async () => {
  const data = await getProducts();
  return (
    <div className="col-span-4 grid grid-cols-3 gap-5">
      {data.map((d) => (
        <ProductBox key={"product-" + d.id} product={d} />
      ))}
    </div>
  );
};
