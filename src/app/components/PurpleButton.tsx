
import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
type Props = {
  text?: string
}
export default function PurpleButton({text}: Props) {
  return (
    <button type='button' className='flex items-center gap-2 text-white whitespace-nowrap bg-purple py-3 px-6 rounded-full max-w-min' >
      { text || 'PurpleButton' }
      <HiArrowNarrowRight   />
    </button>
  )
}