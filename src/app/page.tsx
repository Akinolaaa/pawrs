import Image from 'next/image'
import PetCard from './pet-card'

export default function Home() {
  return (
    <main >
      <div className="relative h-[20rem] border border-black1 bg-nude">
        <div className='absolute left-[25%] -translate-x-[25%] top-[50%] -translate-y-[50%]' >
          <h1>Find your new Best friend</h1>
          <p>Click here to get a new furry friend. Your new furry friend is a click away</p>
          <button> Shop all pets </button>
        </div>

      </div>
      <div className='bg-darkBlue p-4'>
        <ul className='flex justify-around items-center uppercase text-sm text-white'>
          <li> Vetted and Healthy Pets </li>
          <li> + </li>
          <li> Diverse Selection </li>
          <li> + </li>
          <li> Diverse Selection </li>
          <li> + </li>
          <li> Diverse Selection </li>
          <li> + </li>
          <li> Diverse Selection </li>
          <li> + </li>
          <li> Diverse Selection </li>
        </ul>
      </div>
      <div className='p-7'>
        <h1> All pets </h1>
        <div className='flex gap-2'>
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
    </main>
  )
}
