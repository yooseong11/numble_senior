import CellPhoneImage from '@/image/onboarding_3_1.webp'
import slideUpImg from '@/image/onboarding_3_2.webp'
import Image from '@/components/Image'
import { IMAGE_SIZE } from '@/constants/Image'

const Onboarding3 = () => {
  const SLDIEUP_IMAGE_WIDTH = 235

  return (
    <div className='relative'>
      <Image
        width={IMAGE_SIZE.DEFAULT_CELLPHONE_IMAGE_WIDTH}
        src={CellPhoneImage}
        alt='CellPhoneImage'
        className='animate-darker'
      />
      <Image
        width={SLDIEUP_IMAGE_WIDTH}
        src={slideUpImg}
        alt='사기신고 이력'
        className='absolute bottom-12 ml-7 animate-slideUp'
      />
    </div>
  )
}

export default Onboarding3
