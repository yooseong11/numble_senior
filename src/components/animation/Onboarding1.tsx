import Typewriter from 'typewriter-effect'

import CellPhoneImage from '@/image/onboarding_1_1.webp'
import bankImg from '@/image/onboarding_1_2.webp'
import Image from '@/components/Image'
import BlinkAnimation from '@/components/animation/BlinkAnimation'
import { IMAGE_SIZE } from '@/constants/Image'

const Onboarding1 = () => {
  const BANK_IMAGE_WIDTH = 240

  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        alt='bg-CellPhoneImage'
        width={IMAGE_SIZE.DEFAULT_CELLPHONE_IMAGE_WIDTH}
      />

      <div className='font-NotoSan absolute top-56 left-12 text-sm'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('123456789')
              .pauseFor(100)
              .start()
              .pauseFor(100)
              .callFunction(function (state) {
                state.elements.cursor.style.display = 'none'
              })
          }}
        />
      </div>

      <div className='absolute flex top-[17.5rem] z-10 p-0'>
        <BlinkAnimation />
        <Image
          src={bankImg}
          alt='하나, 국민, 우리 은행'
          className='drop-shadow-lg animate-scaleUp-delay2s mr-6'
          width={BANK_IMAGE_WIDTH}
        />
      </div>
    </div>
  )
}

export default Onboarding1
