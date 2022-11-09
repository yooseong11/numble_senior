import Typewriter from 'typewriter-effect'

import CellPhoneImage from '@/image/onboarding_1_1.webp'
import bankImg from '@/image/onboarding_1_2.webp'
import Image from '@/components/Image'
import BlinkAnimation from '@/components/animation/BlinkAnimation'

const Onboarding1 = () => {
  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        alt='bg-CellPhoneImage'
        width={290}
        height={533}
        className='m-auto'
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
          alt='img'
          className='drop-shadow-lg animate-scaleUp-delay2s mr-6'
          width={240}
          height={80}
        />
      </div>
    </div>
  )
}

export default Onboarding1
