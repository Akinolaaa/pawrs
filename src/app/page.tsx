
import AllPets from './components/AllPets';
import PurpleButton from './components/PurpleButton';
import { Playfair_Display } from 'next/font/google'
import cross from "../../public/images/cross.svg";
import Image from 'next/image';
import CategoryCard from './components/CategoryCard';
import Categories from './components/Categories';
import Supplies from './components/Supplies';

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})

export default function Home() {

  return (
    <main>
      <div className="relative h-[20rem] bg-nude min-h-min">

        <div className='absolute flex flex-col gap-3 left-[15%] -translate-x-[15%] top-[50%] -translate-y-[50%] text-red1 w-1/4' >
          <h1 className={`font-semibold text-4xl pr-[4rem]`}> 
            Find your new <span className={`${playfairDisplay.className} italic font-semibold `}>Best friend</span>
          </h1>
          <p className='text-lg'>Click here to get a new furry friend. Your new furry friend is a click away</p>
          <PurpleButton text='Shop All Pets' />
        </div>

      </div>
      <div className='bg-darkBlue px-4 py-6'>
        <ul className='flex justify-around items-center uppercase text-xs text-white'>
          <li> Vetted and Healthy Pets </li>
          <Image src={cross} alt='book' />
          <li> Diverse Selection </li>
          <Image src={cross} alt='book' />
          <li> Diverse Selection </li>
          <Image src={cross} alt='book' />
          <li> Diverse Selection </li>
          <Image src={cross} alt='book' />
          <li> Diverse Selection </li>
          <Image src={cross} alt='book' />
          <li> Diverse Selection </li>
        </ul>
      </div>

      <AllPets />
      <Categories />
      <Supplies />
    </main>
  )
}
