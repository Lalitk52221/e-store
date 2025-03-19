'use client'
import React, { useEffect, useState } from "react";
import Container from "./Container";
import ProductBox from "../ProductBox";

export default function RecentlyAdded() {

  const [products, setProducts] = useState([]);

  const getProducts = async()=>{
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    console.log(data)
    setProducts(data)
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold">Recently Added Products</h1>
        <div className="grid grid-cols-5 my-4 gap-3">
          {
            products.map((prod)=>(
              <ProductBox key={prod.id} product={prod} />
            ))
          }
          {/* <ProductBox/> */}
        </div>
      </Container>
    </div>
  );
}
