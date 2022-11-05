import Onboarding1 from './components/Onboarding1'
import Onboarding2 from './components/Onboarding2'
import Onboarding3 from './components/Onboarding3'
import Onboarding4 from './components/Onboarding4'
import Onboarding5 from './components/Onboarding5'
import Onboarding6 from './components/Onboarding6'

interface onboadringPageProps {
  id: number
  title: string[]
  content: string
  animate: JSX.Element
}

const onboadringDataList: onboadringPageProps[] = [
  {
    id: 1,
    title: ['편리한', '송금'],
    content: '계좌번호 입력 시 자동 은행인식',
    animate: <Onboarding1 />,
  },
  {
    id: 2,
    title: ['안전한', '익명거래'],
    content: '나만의 특별한 아이디로 실명 노출 없이 거래',
    animate: <Onboarding2 />,
  },
  {
    id: 3,
    title: ['사기신고', '이력'],
    content: '송금하는 계좌의 범죄이력 제공',
    animate: <Onboarding3 />,
  },
  {
    id: 4,
    title: ['맞춤형', '솔루션'],
    content: '행복한 미래를 위한 첫걸음',
    animate: <Onboarding4 />,
  },
  {
    id: 5,
    title: ['혜택듬뿍', '카드'],
    content: '내 생활에 맞게 삶의 질을 높여줄 카드',
    animate: <Onboarding5 />,
  },
  {
    id: 6,
    title: ['일자리', '찾기'],
    content: '내 생활에 맞게 삶의 질을 높여줄 카드',
    animate: <Onboarding6 />,
  },
]

export default onboadringDataList
