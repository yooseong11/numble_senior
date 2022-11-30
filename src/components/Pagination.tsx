import classJoin from '@/utils/classJoin'
interface PaginationProps {
  size: number
  activeNumber?: number
}

const Pagination = ({ size, activeNumber }: PaginationProps) => {
  const pages = Array.from({ length: size }, (v, i) => i + 1)

  return (
    <ul className='pagenation flex p-4'>
      {pages.map((currentPage) => (
        <li
          key={currentPage}
          className={classJoin(
            'rounded-full h-[0.375rem] m-[0.188rem]',
            currentPage === activeNumber ? 'bg-gray-400 w-[1.125rem]' : 'bg-gray-350 w-[0.375rem]',
          )}
        />
      ))}
    </ul>
  )
}

export default Pagination
