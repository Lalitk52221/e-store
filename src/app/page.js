import FeaturedProduct from '@/Components/home/FeaturedProduct'
import HeroSection from '@/Components/home/HeroSection'
import RecentlyAdded from '@/Components/home/RecentlyAdded'
import React from 'react'

export default function page() {
  return (
    <div>
      <RecentlyAdded/>
      <FeaturedProduct/>
      <HeroSection/>
    </div>
  )
}
