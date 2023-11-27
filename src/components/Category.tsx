import React from 'react'
import { Whisper } from "next/font/google";
import CategoryCard from './CategoryCard';
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });



const data=[
    {
        img:"/cat-1.jpg",
        type:"Headphone",
        quantity:"(4 Items)"
    },
    {
        img:"/cat-2.jpg",
        type:"Bluetooth Speaker",
        quantity:"(3 Items)"
    },
    {
        img:"/cat-3.jpg",
        type:"Smart Watch",
        quantity:"(2 Items)"
    },
    {
        img:"/cat-4.jpg",
        type:"Wireless Earbuds",
        quantity:"(6 Items)"
    },
]


const Category = () => {
  return (
    <div className='bg-[url(/newsletter-bg.jpeg)] bg-no-repeatpy-16 mt-20'>
        <div className='container text-center text-white'>
          <h3 className={`${whisper.className} text-[40px] text-gray-800`}>Favorite Category</h3> 
          <h2 className='text-[40px] font-medium text-gray-800'>Top Category</h2> 
          <div className='flex justify-center gap-4 md:gap-16 pt-8 pb-7'>
            {data.map((i)=>(
                <CategoryCard
                key={i.type}
                img={i.img}
                type={i.type}
                quantity={i.quantity}
                />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Category