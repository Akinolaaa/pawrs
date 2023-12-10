import React from 'react';
import Logo from './Logo';
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav className='relative'>
      <div className='px-4'>
        <div className='flex gap-5 justify justify-around items-center pt-2'>
          <Logo />
          <div className='flex justify-between items-center w-4/6'>
            <input className='w-full py-2 px-5 border rounded-full' title='search' placeholder='what are you looking for?' />
            <FiSearch className='-translate-x-[3rem]' />
          </div>
          <div className='flex justify-center gap-7 w-1/12'> 
            <FiHeart  />  
            <FiGrid />
          </div>
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
  )
}
