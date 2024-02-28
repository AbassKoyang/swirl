import { Link } from 'react-router-dom'
import linkArrow from '../assets/linkarrow.svg'

const RevolutionCard = ({title, description}) => {
  return (
    <div className="col-span-3 lg:col-span-1 p-6 lg:p-[30px] 2xl:p-10 rounded-[10px] 2xl:rounded-xl bg-[#1a1a1a] border border-[#262626]">
        <div className="w-full flex items-center justify-between">
            <h3 className='font-semibold font-inter text-white text-[16px] lg:text-lg 2xl:text-[22px]'>{title}</h3>
            <Link to='/' aria-label={location} className={`size-[40px] lg:size-[44px] 2xl:size-[52px] bg-[#FFD11A] rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 ease-in-out`}>
                <img src={linkArrow} alt="Arrow" className="size-[14px] lg:size-[14px] 2xl:size-[17px]" />
            </Link>
        </div>
        <p className='font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mt-[10px] lg:mt-4 2xl:mt-5'>{description}</p>
    </div>
  )
}

export default RevolutionCard