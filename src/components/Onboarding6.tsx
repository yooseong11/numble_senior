import CellPhoneImage from '../image/onboarding_6_1.webp'
import Img2 from '../image/onboarding_6_2.webp'
import Img3 from '../image/onboarding_6_3.webp'
import Img4 from '../image/onboarding_6_4.webp'
import Image from './Image'

const Onboarding3 = () => {
  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        width={290}
        height={500}
        alt='CellPhoneImage'
        className='m-auto'
      />
      <div className='absolute right-1/2 translate-x-1/2 bottom-36 z-10 w-[220px] h-[60px] px-4'>
        <Image
          src={Img2}
          width={180}
          height={24}
          alt='img'
          className='p-2 right-1/2 animate-popUp'
        />
        <Image
          src={Img3}
          width={180}
          height={18}
          alt='img'
          className='p-2 right-[8.5rem] animate-popUp-delay1s'
        />
        <Image
          src={Img4}
          width={160}
          height={18}
          alt='img'
          className='p-2 right-1/2 animate-popUp-delay0.5s'
        />
      </div>
    </div>
  )
}

export default Onboarding3
