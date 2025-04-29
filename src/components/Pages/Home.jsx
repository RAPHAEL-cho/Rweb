import React from 'react'
import Hero from '../herosection/Hero'
import LatestCollection from '../latest_collection/LatestCollection'
import Bestseller from '../Bestseller/Bestseller'
import Newsletter from '../forms/Newsletter'



const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Bestseller />
      <Newsletter />
    </div>
  )
}

export default Home