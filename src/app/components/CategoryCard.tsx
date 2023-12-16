import React from 'react'
import Image from 'next/image';
import dogs from "../../../public/images/dogs.svg";
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})


export default function CategoryCard() {


  return (
    <div className={`relative h-full bg-nude rounded-sm`}>
      <div className='absolute left-[10%] top-[10%] flex flex-col gap-6 z-10'>
        <h1 className={`${playfairDisplay.className} font-medium text-base `}> Dogs & Puppies</h1>
        <button type='button' className='flex items-center gap-2 text-white text-sm whitespace-nowrap bg-darkBlue py-1 px-3 rounded-full max-w-min' >
          Shop Now
        </button>
      </div>
      <Image className='absolute bottom-0' src={dogs} alt='dogs' />
    </div>
  )
}
