interface PaginationProps {
  size: number
  activeNumber?: number
}

const Pagination = ({ size, activeNumber }: PaginationProps) => {
  const newArray = Array.from({ length: size }, (v, i) => i + 1)

	const isActiveNumber = (currentPage: number) => currentPage === activeNumber
	
  return (
    <div className='flex'>
      {newArray.map((item, index) => (
        <div
          key={index}
          className={
            'rounded-full h-[0.375rem] m-[0.188rem] ' + (isActiveNumber(item)
              ? 'bg-gray-400 w-[1.125rem]'
              : 'bg-gray-350 w-[0.375rem]')
          }
        />
      ))}
    </div>
  )
}

export default Pagination
