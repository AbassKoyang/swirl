import { NavLink } from "react-router-dom"
import LandingPageButton from "./LandingPageButton"

const Footer = () => {
  return (
    <footer className="w-full grid grid-cols-4 2xl:grid-cols-5 lg:gap-[50px] 2xl:gap-20 lg:pt-[60px] 2xl:pt-20 lg:px-10 2xl:px-[162px] bg-[#141414]">
        <nav className="col-span-2 lg:col-span-1">
            <NavLink to='/' className='font-inter text-white font-medium lg:text-lg 2xl:text-xl' >Home</NavLink>
            <div className="mt-7 2xl:mt-9 flex flex-col items-start gap-3 2xl:gap-[18px]">
                <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Features</NavLink>
                <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Blogs</NavLink>
                <div className="flex items-center gap-2">
                    <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Resources</NavLink>
                    <button className='flex items-center justify-center px-[10px] py-[2px] 2xl:px-3 2xl:py-1 bg-[#141414] border border-[#262626] rounded-[4px] 2xl:rounded-md text-[#98989A] font-normal font-inter text-[12px] 2xl:text-[16px] z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out'>
                        <p className="">New</p>
                    </button>
                </div>
                <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Testimonials</NavLink>
                <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Contact Us</NavLink>
                <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Newsletter</NavLink>
            </div>
        </nav>
        <nav className="col-span-2 lg:col-span-1">
            <NavLink to='/' className='font-inter text-white font-medium 2xl:text-xl' >Resources</NavLink>
            <div className="mt-9 flex flex-col items-start gap-3 2xl:gap-[18px]">
                <LandingPageButton text='Whitepapers' styles='flex items-center justify-center gap-5 2xl:gap-[14px] px-[14px] py-2 2xl:px-[16px] 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
                <LandingPageButton text='Ebooks' styles='flex items-center justify-center gap-5 2xl:gap-[14px] px-[14px] py-2 2xl:px-[16px] 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
                <LandingPageButton text='Reports' styles='flex items-center justify-center gap-5 2xl:gap-[14px] px-[14px] py-2 2xl:px-[16px] 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
                <LandingPageButton text='Research Pqpers' styles='flex items-center justify-center gap-5 2xl:gap-[14px] px-[14px] py-2 2xl:px-[16px] 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
            </div>
        </nav>
    </footer>
  )
}

export default Footer