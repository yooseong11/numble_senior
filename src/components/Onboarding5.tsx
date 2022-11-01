import Img1 from '../image/onboarding_5_1.webp'
import Img2 from '../image/onboarding_5_2.webp'
import Img3 from '../image/onboarding_5_3.webp'
import Img4 from '../image/onboarding_5_4.webp'
import Image from './Image'

const Onboarding3 = () => {
  return (
    <div className='relative'>
      <Image src={Img1} alt='img' width={250} height={500} className='m-auto' />
      <div className='carousel'>
        <Image
          src={Img2}
          alt='img'
          width={224}
          height={355}
          className='absolute bottom-0 p-6 right-2/3 translate-x-1/2'
        />
        <Image
          src={Img3}
          alt='img'
          width={224}
          height={355}
          className='absolute bottom-0 p-6 right-1/3 translate-x-1/2'
        />
        <Image
          src={Img4}
          alt='img'
          width={224}
          height={355}
          className='absolute bottom-0 p-6 right-0 translate-x-1/2'
        />
      </div>
    </div>
  )
}

export default Onboarding3
