import CellPhoneImage from '@/image/onboarding_2_1.webp'
import slideUpImg from '@/image/onboarding_2_2.webp'
import BlinkAnimation from '@/components/animation/BlinkAnimation'
import Image from '@/components/Image'
import { IMAGE_SIZE } from '@/constants/Image'

const Onboarding2 = () => {
  return (
    <div className='relative'>
      <Image
        width={IMAGE_SIZE.DEFAULT_CELLPHONE_IMAGE_WIDTH}
        src={slideUpImg}
        alt='안전한 익명거래'
        className='absolute pt-12 delay animate-hidden'
      />
      <div className='absolute top-32 left-12 z-10'>
        <BlinkAnimation />
      </div>
      <Image width={IMAGE_SIZE.DEFAULT_CELLPHONE_IMAGE_WIDTH}  src={CellPhoneImage} alt='CellPhoneImage' className='animate-slideUp' />
    </div>
  )
}

export default Onboarding2
