import React from 'react'
import PetCard from './PetCard';
import { Playfair_Display } from 'next/font/google'
import PurpleButton from './PurpleButton';

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})

export default function AllPets() {
  return (
    <div className='p-7 mb-5'>
      <h1 className={`my-5 text-3xl font-thin`}> All <span className={`${playfairDisplay.className}`}> Pets </span></h1>
      <div className='flex gap-2'>
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
      <div className='flex justify-center py-4'>
        <PurpleButton text='Shop all pets'/>
      </div>
    </div>
  )
}
