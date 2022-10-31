import Img1 from '../image/onboarding_1_1.png'
import Img2 from '../image/onboarding_1_2.png'

const Onboarding1 = () => {
  return (
    <div className='relative'>
      <img src={Img1} alt='img' className='m-auto' />
      <img src={Img2} alt='img' className='absolute transition-shadow top-1/2 right-1/2 translate-x-1/2 drop-shadow-lg animate-pulse' />
    </div>
  )
}

export default Onboarding1
