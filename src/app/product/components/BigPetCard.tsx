/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import dog from '@/../public/images/pets/dog1.svg';
import book from "@/../public/images/book.svg";
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})

type Props = {}

export default function BigPetCard({}: Props) {

  return (
    <div className={`flex mb-14 w-full`}>
      <div className='relative'>
        <div className='h-full w-[95%]'>
          <Image  src={dog} alt='pet here' />
        </div>
        <div className='absolute left-[10%] bottom-[10%] flex flex-col gap-4'>
          <Image className='w-[15%] h-[15%]' src={dog} alt='pet' />
          <Image className='w-[15%] h-[15%]' src={dog} alt='pet' />
          <Image className='w-[15%] h-[15%]' src={dog} alt='pet' />
          <Image className='w-[15%] h-[15%]' src={dog} alt='pet' />
        </div>
      </div>
      {/* the right side */}
      <div className='w-1/2 px-10'>
        <div className='flex flex-col gap-3 h-full'>
          <div className='flex gap-1 items-center py-1 px-2 bg-green bg-opacity-10 rounded-full max-w-min'>
            <p className=' whitespace-nowrap text-xs'>  Verified Seller  </p>
            <p className='bg-green p-2 opacity-100 rounded-full w-0'> </p>
          </div>
          
          <h1 className={`${playfairDisplay.className} text-3xl`}> Arthur Pawdragon </h1>
          <div className='flex justify-between'> 
            <h1 className='text-3xl'> King Charles Spaniel </h1>
            <h1 className='text-3xl text-purple'> $1200.<span className=' text-base'>00</span></h1>
          </div>
          <div className='flex gap-16 text-grey1'> 
            <p>GENDER: <span className='text-yellow'>Male</span></p>
            <p>AGE: <span className='text-yellow'>12 weeks</span></p>
          </div>
          <div>The King Charles Spaniel or 'Charlie' is a small and attractive dog with large eyes and an upturned shortened (brachycephalic) muzzle. Their semi-long coat is glossy and silky, with perhaps a slight wave, lying close to the body but forming luxurious feathering on the ears, backs of the legs and tail.
          </div>
          <p className='text-sm underline text-purple'>View more about breed</p>
          <p className='text-sm'>Health guarantee</p>
          <p className='text-sm'>Up-to-date vaccinations and dewarming</p>
          <p className='text-sm'>comes with a starter kit including food collar and leash</p>
          <div className='flex gap-3'>
            <button className="flex gap-2 py-3 justify-center items-center w-full rounded-full border border-purple text-purple"> 
              <Image src={book} alt='book' />
              Book a Playdate 
            </button>
            <button className="flex gap-2 py-3 justify-center items-center w-full rounded-full bg-purple text-white"> 
              <Image src={book} alt='book' />
              Adopt Now
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}