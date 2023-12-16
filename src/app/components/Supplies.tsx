import React from 'react'
import SuppliesCard from './SuppliesCard';
import PurpleButton from './PurpleButton';
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})

export default function Supplies() {
  return (
    <div className='p-7 mb-5'>
      <h1 className={`my-5 text-3xl font-thin`}> Supplies & <span className={`${playfairDisplay.className}`}> Pets </span></h1>
      <div className='flex gap-2'>
        <SuppliesCard />
        <SuppliesCard />
        <SuppliesCard />
        <SuppliesCard />
      </div>
      <div className='flex justify-center py-4'>
        <PurpleButton text='Shop Pet Supplies'/>
      </div>
    </div>
  )
}
