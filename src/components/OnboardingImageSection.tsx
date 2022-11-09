import {OnboadringPageProps} from '@/onboardingDummyData'


const OnboardingImageSection = ({ title, content,animate }:OnboadringPageProps) => {
	return (
		<>
		<div className='text-center font-MICEGothc'>
			<h2 className='text-3xl pb-2'>
				{title[0]}{' '}
				<span className='text-yellow-500 font-bold'>{title[1]}</span>
			</h2>
			<p className='text-gray-500 pb-10'>{content}</p>
		</div>
		{animate}</>
	)
}

export default OnboardingImageSection