import React from "react";
import styles from "@/styles/Header.module.css";
import Container from "./home/Container";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`${styles.header} py-3 px-1 shadow`}>
      <Container className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-pink-500 font-bold text-4xl">
       <Link href={'/'}>
        E-Store </Link> <b className="text-black">.</b>
          </span>
        </div>
        <div className= {`${styles.searchBox} flex items-center`}>
          <input type="text" 
          placeholder="Search for products..."
          className={styles.searchInput}
          />
        <button className={`${styles.searchButton} `}>
        <FiSearch />
        </button>
        </div>
        <Navbar/>
      </Container>
    </header>
  );
}

const Navbar = ()=>{
  return(
    <nav className="flex items-center gap-5">
      <ul className="flex items-center gap-3 font-semibold ">
        <li className={styles.navLink}>
         <Link href={'/'}> Home</Link>
        </li>
        <li>
          <Link href={'/store'}>
          Store
          </Link>
        </li>
      </ul>

      {/* icons */}
      <div className="flex items-center gap-4">
        {/* cart icon  */}
        <div className="relative">
          <FiShoppingCart color="black" size={24}/>
          <span className={`${styles.cartBadge} absolute top-[-15px] right-[-20px] bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center `}>3</span>
        </div>
         </div>

    </nav>
  )
}