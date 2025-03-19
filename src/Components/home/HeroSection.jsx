import React from "react";
import Slider from "./Slider";
import Container from "./Container";
import styles from "@/styles/Home/Hero.module.css";

export default function HeroSection() {
  return (
    <Container>
      <section className={`${styles.hero}`}>
        <div className={`${styles.textSection} text-gray-700`}>
          <h1>
            One Stop solution <span className="text-pink-500">E-Store</span>
          </h1>
          <p>Discover the latest headphones, earphones mobiles, tablets etc.</p>
          <p>Exclusive deals just for you!</p>
          <button className={`${styles.ctaButton}`}> Shop Now</button>
        </div>

        <Slider />
      </section>
      
    </Container>
  );
}
