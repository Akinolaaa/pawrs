import Image from "next/image"
import dog1 from "../../public/images/dog1.svg"


const PetCard = () => {
  return (
    <div className="relative flex flex-col gap-2 w-[320px] m-1"> 
      <Image className="rounded-md w-full" alt='dog' src={dog1} height={100} width={100} />
      <div className="flex flex-col gap-1 space-around text-sm">
        <p> Rocky</p>
        <p> Alaskan Malamute . 2 weeks</p>
        <p> $567.89 </p>
        <button className="w-full rounded-full border border-purple text-purple"> Book a Playdate</button>
      </div>
    </div>
  )
}

export default PetCard