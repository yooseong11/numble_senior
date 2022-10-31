import header from '../image/header.png'
import dataDummy from '../onboardingDummyData'
import Onboarding1 from '../components/Onboarding1'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import NextButton from '../components/NextButton'

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

  return (
    <>
      <header>
        <img src={header} />
      </header>
      <main className='flex flex-col justify-between h-full'>
        <div className='px-4 py-4 flex justify-center'>
          <Pagination size={6} activeNumber={paramsNumber} />
        </div>
        <div className='text-center font-MICEGothc'>
          <h2 className='text-3xl pb-2'>{dataDummy[paramsNumber - 1].title}</h2>
          <p>{dataDummy[paramsNumber - 1].content}</p>
        </div>
        {dataDummy[paramsNumber - 1].animate}
        <NextButton active={true} onClick={goNextPage} />
      </main>
    </>
  )
}

export default onboarding
