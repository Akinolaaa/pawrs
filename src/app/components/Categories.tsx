import React from 'react'
import CategoryCard from './CategoryCard'
import { Playfair_Display } from 'next/font/google'
import PurpleButton from './PurpleButton';
import dogs from "../../../public/images/dogs.svg";
import cats from "../../../public/images/cats.svg";
import birds from "../../../public/images/birds.svg";
import rabbits from "../../../public/images/rabbits.svg";

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
          <CategoryCard bgColor='bg-nude2' image={dogs} title='Dogs & Puppies'/>
        </div>
        <div className='col-span-3 grid grid-rows-2 gap-3'>
          <CategoryCard bgColor='bg-lightPurple' image={cats} title='Cats & Kittens'/>
          <CategoryCard bgColor='bg-blueGray' image={birds} title='Birds'/>
        </div>
        <div className='col-span-2'>
          <CategoryCard bgColor='bg-greenBlue' image={rabbits} title='Rabbits & Hamsters'/>
        </div>
      </div>
      <div className='flex justify-center py-4'>
        <PurpleButton text='View All Categories'/>
      </div>
    </div>
  )
}
