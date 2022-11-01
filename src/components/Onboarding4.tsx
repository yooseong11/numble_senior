import CellPhoneImage from '../image/onboarding_4_1.webp'
import Img2 from '../image/onboarding_4_2.webp'
import Img3 from '../image/onboarding_4_3.webp'
import Img4 from '../image/onboarding_4_4.webp'
import Image from './Image'

const Onboarding3 = () => {
  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        alt='CellPhoneImage'
        width={290}
        height={500}
        className='m-auto'
      />

      <div className='absolute bottom-1/2 translate-y-1/2 w-[360px] -right-[34px] overflow-hidden '>
        <Image
          width={220}
          height={110}
          src={Img2}
          alt='img'
          className='slideRight1 dropShadow-custom ml-10 mt-12'
        />
        <Image
          width={220}
          height={110}
          src={Img3}
          alt='img'
          className='slideLeft1 dropShadow-custom ml-20 mt-4'
        />
        <Image
          width={220}
          height={110}
          src={Img4}
          alt='img'
          className='slideRight2 dropShadow-custom ml-9 mt-4'
        />
      </div>
    </div>
  )
}

export default Onboarding3
