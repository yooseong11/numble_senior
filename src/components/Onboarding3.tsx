import Img1 from '../image/onboarding_3_1.png'
import Img2 from '../image/onboarding_3_2.png'

const Onboarding3 = () => {
	return (
    <div className='relative'>
      <img src={Img1} alt='img' className='m-auto' />
      <img src={Img2} alt='img' className='absolute bottom-0 p-6 right-1/2 translate-x-1/2 animate-pulse' />
    </div>
	)
}

export default Onboarding3