

import React from 'react'
import HealthProduct from "../components/HealthProduct";
import  DailyDeals  from "../components/DailyDeals";

const page = () => {
  return (
    <div>
       <h1 className='font-semibold text-4xl text-center shadow-lime-700 bg-blend-color-dodge'>All Products</h1>

        <DailyDeals />
        <HealthProduct />
    </div>
  )
}

export default page
