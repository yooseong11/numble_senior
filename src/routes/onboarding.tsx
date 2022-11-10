import dummyData from '@/onboardingDummyData'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '@/components/Pagination'
import NextButton from '@/components/NextButton'
import { BROWSER_PATH } from '@/constants/path'
import OnboardingImageSection from '@/components/OnboardingImageSection'

const onboarding = () => {
  const { id } = useParams()
  const paramsNumber = Number(id)
  const navigate = useNavigate()

  const goNextPage = () => {
    const nextPageParam = paramsNumber + 1
    if (nextPageParam > dummyData.length) {
      navigate(BROWSER_PATH.MAIN)
      return
    }
    navigate(`${BROWSER_PATH.ONBOARDING}/${nextPageParam}`)
  }

  const currentOnboarding = dummyData[paramsNumber - 1]

  return (
    <>
      <main className='flex flex-col  h-full items-center'>
        <Pagination size={dummyData.length} activeNumber={paramsNumber} />
        <OnboardingImageSection
          title={currentOnboarding.title}
          content={currentOnboarding.content}
          animate={currentOnboarding.animate}
        />
        <NextButton active={true} onClick={goNextPage} />
      </main>
    </>
  )
}

export default onboarding
