import NewsUpdateIcon from '../assets/newsupdateicon.svg'
import ExpertContributorsIcon from '../assets/newsupdateicon.svg'
import GlobalReadershipIcon from '../assets/globalleadershipicon.svg'
import ArrowButtonIcon from '../assets/Button.svg'
import { Link } from 'react-router-dom'

const HeroFeaturesGrid = () => {
  return (
    <div className="w-full grid grid-cols-3 py-[50px] border-y border-y-[#262626]">
        <div className="col-span-1 flex items-center justify-between lg:pl-[50px] 2xl:pl-20">
            <div className="">
                <img src={NewsUpdateIcon} alt="News Update Icon" className='lg:size-[40px] 2xl:size-[50px]' />
                <p className='font-medium font-inter lg:text-lg 2xl:text-xl text-white mt-3'>Latest Tech News Updates</p>
                <p className='font-normal font-inter text-[#CCCCCC] lg:text-[16px] 2xl:text-lg mt-1'>Stay Current</p>
                <p className='font-regular font-kumbh text-[#98989A] lg:text-[16px] 2xl:text-xl mt-[30px]'>Over 1,000 tech articles published monthly</p>
            </div>

            <Link className='flex items-center justify-center'>
                <img src={ArrowButtonIcon} alt="Link to Latest news page" className='lg:size-[44px] 2xl:size-[52px]' />
            </Link>
        </div>
        <div className="col-span-1 flex items-center justify-between lg:px-[50px] 2xl:px-20">
            <div className="">
                <img src={GlobalReadershipIcon} alt="News Update Icon" className='lg:size-[40px] 2xl:size-[50px]' />
                <p className='font-medium font-inter lg:text-lg 2xl:text-xl text-white mt-3'>Global Readership</p>
                <p className='font-normal font-inter text-[#CCCCCC] lg:text-[16px] 2xl:text-lg mt-1'>Worldwide Impact</p>
                <p className='font-regular font-kumbh text-[#98989A] lg:text-[16px] 2xl:text-xl mt-[30px]'>2 million monthly readers</p>
            </div>

            <Link className='flex items-center justify-center'>
                <img src={ArrowButtonIcon} alt="Link to Latest news page" className='lg:size-[44px] 2xl:size-[52px]' />
            </Link>
        </div>
        <div className="col-span-1 flex items-center justify-between lg:pr-[50px] 2xl:pr-20">
            <div className="">
                <img src={ExpertContributorsIcon} alt="News Update Icon" className='lg:size-[40px] 2xl:size-[50px]' />
                <p className='font-medium font-inter text-xl text-white mt-3'>Expert Writers</p>
                <p className='font-normal font-inter text-[#CCCCCC] lg:text-[16px] 2xl:text-lg mt-1'>Trusted Insights</p>
                <p className='font-regular font-kumbh text-[#98989A] lg:text-[16px] 2xl:text-xl mt-[30px]'>1k+ renowned Tech experts use our platform</p>
            </div>

            <Link className='flex items-center justify-center'>
                <img src={ArrowButtonIcon} alt="Link to Latest news page" className='lg:size-[44px] 2xl:size-[52px]' />
            </Link>
        </div>
    </div>
  )
}

export default HeroFeaturesGrid