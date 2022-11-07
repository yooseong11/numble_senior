import dataDummy from '../onboardingDummyData'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import NextButton from '../components/NextButton'
import Header from '../components/Header'

const onboarding = () => {
  const { id } = useParams()
  const paramsNumber = Number(id)
  const navigate = useNavigate()

  const goNextPage = () => {
    const nextPageParam = paramsNumber + 1
    if (nextPageParam > dataDummy.length) {
      navigate('/main')
      return
    }
    navigate(`/onboarding/${paramsNumber + 1}`)
  }

  const currentOnboarding = dataDummy[paramsNumber - 1]

  return (
    <>
      <main className='flex flex-col  h-full items-center'>
        <div className='text-right flex justify-end w-full px-4'></div>
        <div className='px-4 py-4 relative flex w-full justify-center'>
          <Pagination size={6} activeNumber={paramsNumber} />
        </div>
        <div className='text-center font-MICEGothc'>
          <h2 className='text-3xl pb-2'>
            {currentOnboarding.title[0]}{' '}
            <span className='text-yellow-500 font-bold'>{currentOnboarding.title[1]}</span>
          </h2>
          <p className='text-gray-500 pb-10'>{currentOnboarding.content}</p>
        </div>
        {currentOnboarding.animate}
        <NextButton active={true} onClick={goNextPage} />
      </main>
    </>
  )
}

export default onboarding
