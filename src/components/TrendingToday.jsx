import React from 'react'
import DealCard from './DealCard'

export const TrendingToday = () => {
 
  return (
    <div className=" my-8 mx-6">
      <h1 className="text-4xl font-bold">Trending Today</h1>
      {/* <div className='flex justify-center '> */}
      <div className="flex flex-wrap gap-5 justify-between ">
        <DealCard
          image={
            "https://img.grouponcdn.com/deal/ddPzt2ANHPaiTDHemkY3/1i-984x591/v1/t300x182.webp"
          }
        />
        <DealCard
          image={
            "https://img.grouponcdn.com/bynder/45wBzwEWRyeeT7rQk632Zpe596rV/45-2048x1229/v1/t300x182.webp"
          }
        />
        <DealCard
          image={
            "https://img.grouponcdn.com/deal/3GbfEGiBvo8PeCMcLBAxEzJSYrxV/3G-2048x1229/v1/t300x182.webp"
          }
        />
      </div>
      {/* </div> */}
    </div>
  );
}
