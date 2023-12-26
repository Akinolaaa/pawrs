import React from 'react'
import BigPetCard from './components/BigPetCard'
import Supplies from '../components/Supplies'
import { Playfair_Display } from 'next/font/google'
import PetCard from '../components/PetCard';

type Props = {}

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})

export default function Product({}: Props) {
  return (
    <main className=''>
      Dog/this/that
      <BigPetCard />

      <div className='px-7'>
        <h1 className={`my-5 text-3xl font-thin`}> 
          Shop from the <span className={`${playfairDisplay.className}`}> Same Litter </span>
        </h1>
        <div className='flex gap-2'>
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
      <Supplies />
    </main>
  )
}