import Image from 'next/image'
import pawrsLogo from '../../public/pawrs-logo.svg'

const Logo = () => {
  return(
    <div> 
      <Image alt='logo' src={pawrsLogo} width={112} height={59.5}/>
    </div>

  )
}

export default Logo;