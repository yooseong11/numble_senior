import CellPhoneImage from '../image/onboarding_3_1.webp'
import slideUpImg from '../image/onboarding_3_2.webp'
import Image from './Image'

const Onboarding3 = () => {
	return (
    <div className='relative'>
      <Image width={290} height={500}  src={CellPhoneImage} alt='img' className='m-auto animate-darker'  />
      <Image width={235} height={100}  src={slideUpImg} alt='img' className='absolute bottom-8 ml-7 animate-slideUp' />
    </div>
	)
}

export default Onboarding3