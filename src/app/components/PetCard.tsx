import Image from "next/image";
import dog1 from "../../../public/images/dog1.svg";
import book from "../../../public/images/book.svg";
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})

const PetCard = () => {
  return (
    <div className="relative flex flex-col gap-2 w-[320px] m-1 py-2 px-1">
      <Image className="rounded-md w-full" alt='dog' src={dog1} height={100} width={100} />
      <div className="flex flex-col gap-1 space-around text-sm">
        <p className={`${playfairDisplay.className} text-grey1 italic`}> Rocky </p>
        <p> Alaskan Malamute . 2 weeks </p>
        <p className="font-semibold"> $567.89 </p>
        <button className="flex gap-2 justify-center items-center w-full rounded-full border border-purple text-purple"> 
          <Image src={book} alt='book' />
          Book a Playdate 
        </button>
      </div>
    </div>
  )
}

export default PetCard