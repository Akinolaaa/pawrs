import Image from 'next/image'
import pawrsLogo from '../../../public/pawrs-logo.svg'

type props = {
  width?: number,
  height?: number,
}
const Logo = ({ width, height }: props) => {
  return(
    <div> 
      <Image alt='logo' src={pawrsLogo} width={width ?? 112} height={height ?? 59.5}/>
    </div>
  )
}

export default Logo;