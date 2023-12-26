import React from 'react'
import Logo from './Logo'
import { HiArrowNarrowRight } from "react-icons/hi";

import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})

export default function Footer() {
  return (
    <div className='bg-fadedNude px-2'>
      <div className='py-5'>
        <div className='grid grid-cols-7 gap-9'>
          <div className='col-span-2 flex flex-col gap-8'>
            <p className='text-2xl'>Updates, News, and Deals. Right in your <span className={`${playfairDisplay.className}`}>inbox</span></p>
            <div className='flex justify-between bg-white text-xs rounded-full'>
              <input className='h-full p-2' type='email' title='email' placeholder='youremail@email.com'/>
              <button className='flex  items-center text-xs text-purple py-2 px-4 border border-purple rounded-full'> 
                Subscribe 
                <HiArrowNarrowRight />
              </button>
            </div>
          </div>
          <div className='col-span-5 flex justify-around pr-20'>
            <div className='flex flex-col gap-8 uppercase text-xs text-grey1'>
              <p className='text-darkBlue'>shop</p>
              <p>Veterinary care</p>
              <p>Blog</p>
              <p>Promotion & Deals</p>
              <p>Available Pets</p>
            </div>
            <div className='flex flex-col gap-8 uppercase text-xs text-grey1'>
              <p className='text-darkBlue'>customer service</p>
              <p>Veterinary care</p>
              <p>Blog</p>
              <p>Promotion & Deals</p>
              <p>Available Pets</p>
            </div>
            <div className='flex flex-col gap-8 uppercase text-xs text-grey1'>
              <p className='text-darkBlue'>about</p>
              <p>Veterinary care</p>
              <p>Blog</p>
              <p>Promotion & Deals</p>
              <p>Available Pets</p>
            </div>
            <div className='flex flex-col gap-8 uppercase text-xs text-grey1'>
              <p className='text-darkBlue'>more</p>
              <p>Veterinary care</p>
              <p>Blog</p>
              <p>Promotion & Deals</p>
              <p>Available Pets</p>
            </div>
          </div>
        </div>

      </div>
      <div className='flex gap-3 items-center py-7 text-xs'>
        <Logo width={70} height={70}/>
        <p className='text-grey1'> Copyright 2023</p>
      </div>

    </div>
  )
}
