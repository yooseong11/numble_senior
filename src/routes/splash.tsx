import splashImg from '../image/splash.webp'
import kbImg from '../image/kb.webp'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const splash = () => {
  const navigate = useNavigate()
  const goToOnboardingPage = () => {
    navigate('/onboarding/1')
  }
  useEffect(() => {
    setTimeout(goToOnboardingPage, 3000)
  }, [])

  return (
    <div className='flex flex-col items-center font-MICEGothc py-20' onClick={goToOnboardingPage}>
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

export default splash
