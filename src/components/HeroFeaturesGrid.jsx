import NewsUpdateIcon from '../assets/newsupdateicon.svg'
import ExpertContributorsIcon from '../assets/newsupdateicon.svg'
import GlobalReadershipIcon from '../assets/globalleadershipicon.svg'
import ArrowLink from './ArrowLink'

const HeroFeaturesGrid = () => {
  return (
    <div className="w-full grid grid-cols-3 border-y border-y-[#262626] px-5 lg:px-0">
        <div className="col-span-3 lg:col-span-1 flex items-center justify-between py-[30px] lg:py-[50px] lg:pl-[50px] 2xl:pr-20 border-y border-y-[#262626] lg:border-0">
            <div className="">
                <img src={NewsUpdateIcon} alt="News Update Icon" className='lg:size-[40px] 2xl:size-[50px]' />
                <p className='font-medium font-inter text-[16px] lg:text-lg 2xl:text-xl text-white mt-4'>Latest Tech News Updates</p>
                <p className='font-normal font-inter text-sm text-[#CCCCCC] lg:text-[16px] 2xl:text-lg mt-1'>Stay Current</p>
                <p className='font-regular font-kumbh text-[16px] text-[#98989A] lg:text-[16px] 2xl:text-xl mt-6 2xl:mt-[30px]'>Over 1,000 tech articles published monthly</p>
            </div>

            <ArrowLink location='Link to articles' />
        </div>
        <div className="col-span-3 lg:col-span-1 flex items-center justify-between py-[30px] lg:py-[50px] lg:px-[50px] 2xl:px-20 border-y border-y-[#262626] lg:border-0">
            <div className="">
                <img src={GlobalReadershipIcon} alt="News Update Icon" className='lg:size-[40px] 2xl:size-[50px]' />
                <p className='font-medium font-inter text-[16px] lg:text-lg 2xl:text-xl text-white mt-4'>Global Readership</p>
                <p className='font-normal font-inter text-sm text-[#CCCCCC] lg:text-[16px] 2xl:text-lg mt-1'>Worldwide Impact</p>
                <p className='font-regular font-kumbh text-[16px] text-[#98989A] lg:text-[16px] 2xl:text-xl mt-6 2xl:mt-[30px]'>2 million monthly readers</p>
            </div>

            <ArrowLink location='Link to articles' />
        </div>
        <div className="col-span-3 lg:col-span-1 flex items-center justify-between py-[30px] lg:py-[50px] lg:pr-[50px] 2xl:pl-20 border-y border-y-[#262626] lg:border-0">
            <div className="">
                <img src={ExpertContributorsIcon} alt="News Update Icon" className='lg:size-[40px] 2xl:size-[50px]' />
                <p className='font-medium font-inter text-[16px] text-xl text-white mt-4'>Expert Writers</p>
                <p className='font-normal font-inter text-sm text-[#CCCCCC] lg:text-[16px] 2xl:text-lg mt-1'>Trusted Insights</p>
                <p className='font-regular font-kumbh text-[16px] text-[#98989A] lg:text-[16px] 2xl:text-xl mt-6 2xl:mt-[30px]'>1k+ renowned Tech experts use our platform</p>
            </div>

            <ArrowLink location='Link to articles' />
        </div>
    </div>
  )
}

export default HeroFeaturesGrid