import splashImg from '../image/splash.webp'
import kbImg from '../image/kb.webp'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Splash = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // 3초 뒤에 자동으로 다음 페이지로
    const AutoGoToNextPage = () => {
      setTimeout(() => {
        goToOnboardingPage()
      }, 3000)
    }
    AutoGoToNextPage()
  }, [])

  const goToOnboardingPage = () => {
    navigate('/skipOrStart')
  }

  return (
    <div
      className='flex flex-col items-center font-MICEGothc py-20 px-16'
      onClick={goToOnboardingPage}
    >
      <div className='text-center'>
        <p className='text-xl'>
          당신의 <span className='text-yellow-500 font-bold'>인생 2막</span>을 응원하는
        </p>
        <p className='text-2xl'>평생 금융파트너</p>
      </div>
      <img className='pt-14 w-60' src={splashImg} title='kb국민은행' />
      <h1>
        <img className='w-44 pt-14 animate-pulse' src={kbImg} title='kb국민은행' />
      </h1>
    </div>
  )
}

export default Splash
