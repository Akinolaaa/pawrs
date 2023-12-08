import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from './Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pawrs',
  description: 'your favorite pet platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <p className='text-center text-black1 font-[14px] py-1 bg-nude'> 
          Free Veterinary Checkup for the first 4 months! 
        </p>
        <nav className='relative'>
          <div className='px-4'>
            <div className='flex gap-5 justify justify-around items-center'>
              <Logo />
              <div className='flex justify-between py-1  px-5 border rounded-full w-full'>
                <input title='search' placeholder='what are you looking for?' />
                <p> search icon</p>
              </div>
              <div> Icons </div>
            </div>
            <ul className='flex justify-center gap-4 whitespace-nowrap uppercase text-xs text-grey1 py-3'>
              <li> veterinary care </li>
              <li> blog </li>
              <li> Promotions & Deals </li>
              <li> veterinary care </li>
              <li> Available Pets </li>
              <li> Pet Supplies </li>
              <li> Customer Support </li>
            </ul>
          </div>
          <div className='flex justify-center w-full bg-whitish py-2 '>
            <ul className='flex justify-around gap-3 w-4/6 whitespace-nowrap text-sm text-darkBlue '>
              <li> Dogs & Puppies </li>
              <li> Cats & Kittens </li>
              <li> Birds </li>
              <li> Reptiles </li>
              <li> Fish </li>
              <li> Small Animals </li>
              <li> Exotic Pets </li>
              <li> Pet Care </li>
              <li> Treats </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
