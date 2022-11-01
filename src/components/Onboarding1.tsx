import CellPhoneImage from '../image/onboarding_1_1.webp'
import bankImg from '../image/onboarding_1_2.webp'
import Typewriter from 'typewriter-effect'
import Image from './Image'
import BlinkAnimation from './BlinkAnimation'

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
      <div className='absolute top-[17.5rem] z-10'>
        <BlinkAnimation />
      </div>
      <Image
        src={bankImg}
        alt='img'
        className='absolute top-72 right-1/2 translate-x-1/2 drop-shadow-lg animate-onboarding1 transition-all'
        width={240}
        height={80}
      />
    </div>
  )
}

export default Onboarding1
