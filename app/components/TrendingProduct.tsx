import React from 'react'
import ProductCarousel from './ProductCarousel'
import { combinedArray } from '../staticData'

const TrendingProduct = () => {
  return (
    <ProductCarousel title='Trending Products' timer={null} productArray={combinedArray}  />
  )
}

export default TrendingProduct
