import React from 'react'
import  { getCategories } from "@/Library"
import Container from '@/Components/home/Container';
export default function StoreLayout({children}) {
  return (
    <Container className="grid grid-cols-5 mt-4">
      <CategoryListing/>
      {children}
      {/* <ProductListing /> */}
    </Container>
  )
}

const CategoryListing = async () => {
    const data = await getCategories();
    return (
      <div className="">
        <h1 className="text-2xl font-semibold"> Categories</h1>
        <ul>
          {data.map((d, i) => {
            return (
              <li
                key={"category-" + i}
                className="bg-gray-200 p-4 m-4 rounded-md"
              >
                {d.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };