import { useEffect, useState } from 'react'
import icons from '../image/icons.png'
import Image from './Image'

const Header = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  }, [])

  const hours = date.getHours()
  const minutes = date.getMinutes()

  return (
    <header className='h-[3.25rem] p-4 font-NotoSans flex justify-between'>
      <div>{`${hours} : ${minutes}`}</div>
      <Image src={icons} alt='phoneIcons' width={46} height={17} />
    </header>
  )
}

export default Header
