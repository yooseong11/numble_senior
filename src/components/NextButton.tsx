import classJoin from '@/utils/classJoin'

interface NextButtonProps {
  active?: boolean
  onClick?: () => void
}

const NextButton = ({ active = false, onClick }: NextButtonProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <button
      onClick={active ? onClick : () => {}}
      className={classJoin(
        'nextButton text-gray-800 font-bold pt-3 pb-6 w-full font-NotoSans absolute bottom-0 hover:bg-yellow-500 rounded-b-lg',
        active ? 'bg-yellow-300' : 'bg-gray-300',
      )}
    >
      다음
    </button>
  )
}

export default NextButton
