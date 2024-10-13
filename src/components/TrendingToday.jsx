import React from 'react'
import DealCard from './DealCard'

export const TrendingToday = () => {
 
  return (
    <div className=" my-8 mx-6">
      <h1 className="text-4xl font-bold">Trending Today</h1>
      {/* <div className='flex justify-center '> */}
        <div className="flex flex-wrap gap-5 justify-between ">
          <DealCard />
          <DealCard />
          <DealCard />
        </div>
      {/* </div> */}
    </div>
  );
}
