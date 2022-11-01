import CellPhoneImage from '../image/onboarding_5_1.webp'
import Img2 from '../image/onboarding_5_2.webp'
import Img3 from '../image/onboarding_5_3.webp'
import Img4 from '../image/onboarding_5_4.webp'
import Image from './Image'

const Onboarding3 = () => {
  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        alt='CellPhoneImage'
        width={360}
        height={500}
        className='m-auto'
      />
      <div className='carousel absolute bottom-1/2 translate-y-1/2'>
        <div className='flex slideLeft2 p-8 '>
          <Image src={Img2} alt='img' width={190} height={355} className='ml-8 mr-8 scale-110 scaleDown' />
          <Image src={Img4} alt='img' width={190} height={355} className='mr-8 scaleUp1' />
          <Image src={Img3} alt='img' width={190} height={355} className='mr-8 scaleUp2' />
        </div>
      </div>
    </div>
  )
}

export default Onboarding3
