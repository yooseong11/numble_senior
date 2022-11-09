import Image from '@/components/Image'
import CellPhoneImage from '@/image/onboarding_6_1.webp'
import Icon1 from '@/image/onboarding_6_2.webp'
import Icon2 from '@/image/onboarding_6_3.webp'
import Icon3 from '@/image/onboarding_6_4.webp'
import { IMAGE_SIZE } from '@/constants/Image'

const Onboarding3 = () => {
  const ICON_SIZE = 24

  const PopUpImageList = [
    {
      image: Icon1,
      text: '원하는 조건선택',
      animation: 'animate-popUp',
    },
    {
      image: Icon2,
      text: '입증된 채용공고',
      animation: 'animate-popUp-delay0.5s',
    },
    {
      image: Icon3,
      text: 'AI 취업 매칭',
      animation: 'animate-popUp-delay1s',
    },
  ]

  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        width={IMAGE_SIZE.DEFAULT_CELLPHONE_IMAGE_WIDTH}
        alt='CellPhoneImage'
        className='m-auto'
      />

      <ul className='absolute right-1/2 translate-x-1/2 bottom-36 z-10 w-[220px] h-[60px] px-4 font-MICEGothc'>
        {PopUpImageList.map((popUpImage) => (
          <li
            key={popUpImage.text}
            className={`p-2 pl-6 right-1/2 flex items-center ${popUpImage.animation}`}
          >
            <Image src={popUpImage.image} width={ICON_SIZE} height={ICON_SIZE} alt='icon' />
            <p className='text-base pl-3'>{popUpImage.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Onboarding3
