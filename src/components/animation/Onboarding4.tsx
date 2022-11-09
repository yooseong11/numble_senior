import CellPhoneImage from '@/image/onboarding_4_1.webp'
import Card1 from '@/image/onboarding_4_2.webp'
import Card2 from '@/image/onboarding_4_3.webp'
import Card3 from '@/image/onboarding_4_4.webp'
import Image from '@/components/Image'
import { IMAGE_SIZE } from '@/constants/Image'

const Onboarding3 = () => {
  const CARD_IMAGE_WIDTH = 220

  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        alt='CellPhoneImage'
        width={IMAGE_SIZE.DEFAULT_CELLPHONE_IMAGE_WIDTH}
        className='m-auto'
      />

      <div className='absolute bottom-64 translate-y-1/2 w-[360px] -right-[34px] overflow-hidden '>
        <Image
          width={CARD_IMAGE_WIDTH}
          src={Card1}
          alt='kb 금융 전문가 상담'
          className='animate-slideRight drop-shadow-card ml-10 mt-12'
        />
        <Image
          width={CARD_IMAGE_WIDTH}
          src={Card2}
          alt='맞춤형 은퇴 자산설계'
          className='animate-slideLeft-delay0.5s drop-shadow-card ml-20 mt-4'
        />
        <Image
          width={CARD_IMAGE_WIDTH}
          src={Card3}
          alt='나만을 위한 건강비서'
          className='animate-slideRight-delay1s drop-shadow-card ml-9 mt-4 pb-8'
        />
      </div>
    </div>
  )
}

export default Onboarding3
