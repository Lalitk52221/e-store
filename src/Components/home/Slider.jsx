"use client";
import React, { useEffect } from "react";
import styles from "@/styles/Home/Hero.module.css";
import Image from "next/image";
const images = [
  "https://m.media-amazon.com/images/I/71ThMXhUXPL.jpg",
  "https://m.media-amazon.com/images/I/6188p-pSnoL.jpg",
  "https://m.media-amazon.com/images/I/61+2uNL6lUL.jpg", 
  "https://m.media-amazon.com/images/I/71Hj72GiJQL.jpg",
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(()=>{
    
    const interval = setInterval(()=>{
      
      setCurrentSlide((currentValue)=>{
        if(currentValue == images.length-1){
          return 0;
        }
        else{
          return(currentValue+1)
        }
      })
    },3000)
    return ()=>{
      clearInterval(interval);
    }
  },[])
  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((image, index) => {
          return (
            <Image
            alt={"Slide" + index}
              key={"Slide" + index}
              className={`${styles.slide} ${currentSlide === index && styles.active}`}
              src={image}
              fill
              sizes="50"
            />
          );
        })}
      </div>
    </div>
  );
}
