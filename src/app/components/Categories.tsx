import React from 'react'
import CategoryCard from './CategoryCard'
import { Playfair_Display } from 'next/font/google'
import PurpleButton from './PurpleButton';

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})


export default function Categories() {
  return (
    <div className='p-7'>
      <h1 className={`my-5 text-3xl font-thin`}> Shop by <span className={`${playfairDisplay.className}`}> Category </span></h1>
      <div className='grid grid-cols-8 gap-3 h-[655px]'>
        <div className='col-span-3'>
          <CategoryCard />
        </div>
        <div className='col-span-3 grid grid-rows-2 gap-3'>
          <CategoryCard />
          <CategoryCard />
        </div>
        <div className='col-span-2'>
          <CategoryCard />
        </div>
      </div>
      <div className='flex justify-center py-4'>
        <PurpleButton text='View All Categories'/>
      </div>
    </div>
  )
}
