import CellPhoneImage from '@/image/onboarding_5_1.webp'
import Card1 from '@/image/onboarding_5_2.webp'
import Card2 from '@/image/onboarding_5_3.webp'
import Card3 from '@/image/onboarding_5_4.webp'
import Image from '@/components/Image'

const Onboarding3 = () => {
  const CARD_IMAGE_WIDTH = 190
  const CELLPHONE_IMAGE_WIDHT = 360

  const CardList = [
    {
      image: Card1,
      content: '탐나는전 체크카드',
      animation: 'animate-scaleDown',
    },
    {
      image: Card3,
      content: '다담카드',
      animation: 'animate-scaleUp',
    },
    {
      image: Card2,
      content: 'Easy link 카드',
      animation: '',
    },
  ]

  const MovingCarouselBar = () => {
    return (
      <div className='bg-white w-44 h-0.5 mb-6 relative '>
        <div className='w-11 bg-brown-200 h-1 absolute bottom-0 animate-moveRight'></div>
      </div>
    )
  }

  return (
    <div className='relative'>
      <Image src={CellPhoneImage} alt='CellPhoneImage' width={CELLPHONE_IMAGE_WIDHT} />

      <div className='absolute bottom-56 translate-y-1/2 flex flex-col items-center'>
        <div className='flex animate-carouselSlideLeft pb-4 ml-4'>
          {CardList.map((card) => (
            <Image
              key={card.content}
              src={card.image}
              alt={card.content}
              width={CARD_IMAGE_WIDTH}
              className={`mr-8 ${card.animation}`}
            />
          ))}
        </div>
        <MovingCarouselBar />
      </div>
    </div>
  )
}

export default Onboarding3
