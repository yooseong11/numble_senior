import header from '../image/header.webp'
import dataDummy from '../onboardingDummyData'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import NextButton from '../components/NextButton'
import CrossButton from '../components/CrossButton'

const onboarding = () => {
  const { id } = useParams()
  const paramsNumber = Number(id)
  const navigate = useNavigate()

  const goNextPage = () => {
    const nextPageParam = paramsNumber + 1
    if (nextPageParam > dataDummy.length) {
      alert('마지막 페이지입니다.')
      return
    }
    navigate(`/onboarding/${paramsNumber + 1}`)
  }
  const goIndexPage = () => {
    navigate('/')
  }
  return (
    <>
      <header>
        <img src={header} />
      </header>
      <main className='flex flex-col  h-full items-center'>
        <div className='text-right flex justify-end w-full px-4'>
        </div>
        <div className='px-4 py-4 relative flex w-full justify-center'>
          <Pagination size={6} activeNumber={paramsNumber} />
          <div className='absolute right-0 pr-4'>
          <CrossButton onClick={goIndexPage} />
          </div>
        </div>
        <div className='text-center font-MICEGothc'>
          <h2 className='text-3xl pb-2'>
            {dataDummy[paramsNumber - 1].title[0]}{' '}
            <span className='text-yellow-500 font-bold'>
              {dataDummy[paramsNumber - 1].title[1]}
            </span>
          </h2>
          <p className='text-gray-500 pb-10'>{dataDummy[paramsNumber - 1].content}</p>
        </div>
        {dataDummy[paramsNumber - 1].animate}
        <NextButton active={true} onClick={goNextPage} />
      </main>
    </>
  )
}

export default onboarding
