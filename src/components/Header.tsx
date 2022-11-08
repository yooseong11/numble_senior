import { useEffect, useState } from 'react'
import icons from '../image/icons.png'
import Image from './Image'

const Header = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  }, [])

  const hours = date.getHours()
  // 0-9 숫자 00,01 로 반환
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return (
    <header className='h-[3.25rem] p-4 font-NotoSans flex justify-between'>
      <div className='font-roboto'>{`${hours} : ${minutes}`}</div>
      <Image src={icons} alt='phoneIcons' width={46} height={17} />
    </header>
  )
}

export default Header
