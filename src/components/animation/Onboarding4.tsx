import CellPhoneImage from '@/image/onboarding_4_1.webp'
import Card1 from '@/image/onboarding_4_2.webp'
import Card2 from '@/image/onboarding_4_3.webp'
import Card3 from '@/image/onboarding_4_4.webp'
import Image from '@/components/Image'
import { IMAGE_SIZE } from '@/constants/Image'

const Onboarding3 = () => {
  const CARD_IMAGE_WIDTH = 220

  const cardList = [
    {
      image: Card1,
      content: 'kb 금융 전문 상담가',
      animation: 'animate-slideRight',
      position: 'ml-10'
    },
    {
      image: Card2,
      content: '맞춤형 은퇴 자산설계',
      animation: 'animate-slideLeft-delay0.5s',
      position: 'ml-20 mt-4'
    },
    {
      image: Card3,
      content: '나만을 위한 건강비서',
      animation: 'animate-slideRight-delay1s',
      position: 'ml-9 mt-4'
    },
  ]

  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        alt='CellPhoneImage'
        width={IMAGE_SIZE.DEFAULT_CELLPHONE_IMAGE_WIDTH}
        className='m-auto'
      />

      <div className='absolute bottom-[15.5rem] translate-y-1/2 w-[360px] -right-[34px] overflow-hidden '>
        {cardList.map((card) => (
          <Image width={CARD_IMAGE_WIDTH}
            src={card.image}
            key={card.content}
            alt={card.content}
            className={`drop-shadow-card ${card.animation} ${card.position}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Onboarding3
