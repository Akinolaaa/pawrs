import Image from "next/image";
import munchies from "../../../public/images/munchies.svg";
import carticon from "../../../public/images/carticon.svg";
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  style: "italic",
})

const SuppliesCard = () => {
  return (
    <div className="relative flex flex-col gap-2 w-[320px] m-1 py-2 px-1">
      <Image className="rounded-md w-full" alt='dog' src={munchies} height={100} width={100} />
      <div className="flex flex-col gap-1 space-around text-sm">
        <p className={`${playfairDisplay.className} text-grey1 italic`}> Dog Treats </p>
        <p> Pet Munchies Natural Dog Treats </p>
        <p className="font-semibold"> $567.89 </p>
        <button className="flex gap-2 justify-center items-center w-full rounded-full border border-purple text-purple py-1"> 
          <Image src={carticon} alt='carticon' />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default SuppliesCard