import CellPhoneImage from '../image/onboarding_6_1.webp'
import Img2 from '../image/onboarding_6_2.webp'
import Img3 from '../image/onboarding_6_3.webp'
import Img4 from '../image/onboarding_6_4.webp'
import Image from './Image'

const Onboarding3 = () => {
  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        width={290}
        height={500}
        alt='CellPhoneImage'
        className='m-auto'
      />
      <ul className='absolute right-1/2 translate-x-1/2 bottom-36 z-10 w-[220px] h-[60px] px-4 font-MICEGothc'>
        <li className='p-2 pl-6 right-1/2 animate-popUp flex items-center'>
          <Image src={Img2} width={24} height={24} alt='img' />
          <p className='text-sm pl-3'>원하는 조건선택</p>
        </li>
        <li className='p-2 pl-6 right-[8.5rem] animate-popUp-delay1s flex items-center'>
          <Image src={Img3} width={24} height={24} alt='img' />
          <p className='text-base pl-3'>입증된 채용공고</p>
        </li>
        <li className='p-2 pl-6 right-1/2 animate-popUp-delay0.5s flex items-center'>
          <Image src={Img4} width={24} height={24} alt='img' />
          <p className='text-sm pl-3'>AI 취업 매칭</p>
        </li>
      </ul>
    </div>
  )
}

export default Onboarding3
