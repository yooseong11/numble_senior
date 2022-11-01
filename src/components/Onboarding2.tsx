import CellPhoneImage from '../image/onboarding_2_1.webp'
import slideUpImg from '../image/onboarding_2_2.webp'
import BlinkAnimation from './BlinkAnimation'
import Image from './Image'

const Onboarding2 = () => {
	return (
		<div className='relative'>
      <Image width={290} height={500}  src={slideUpImg} alt='img' className='pt-12 delay animate-hidden' />
			<div className='absolute top-32 left-12 z-10'><BlinkAnimation /></div>
			<Image width={290} height={500} src={CellPhoneImage} alt='img' className='absolute top-0 animate-slideUp' />
			
    </div>
	)
}

export default Onboarding2