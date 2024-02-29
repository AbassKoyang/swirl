import { Link, NavLink } from "react-router-dom"
import LandingPageButton from "./LandingPageButton"
import line from '../assets/Line.svg'
import linkedinIcon from '../assets/Iconlinkedin.svg'
import mediumIcon from '../assets/Iconmedium.svg'
import twitterIcon from '../assets/Vectortwitter.svg'


const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] px-5 lg:px-10 2xl:px-[162px]">
        <div className="w-full grid grid-cols-4 2xl:grid-cols-5 gap-5 lg:gap-[50px] 2xl:gap-20 bg-[#141414]">
        <nav className="col-span-2 lg:col-span-1 pt-10 lg:pt-[60px] 2xl:pt-20">
            <NavLink to='/' className='font-inter text-white font-medium text-[16px] lg:text-lg 2xl:text-xl' >Home</NavLink>
            <div className="mt-4 lg:mt-7 2xl:mt-9 flex flex-col items-start gap-3 2xl:gap-[18px]">
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Features</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Blogs</NavLink>
                <div className="flex items-center gap-2">
                    <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Resources</NavLink>
                    <button className='flex items-center justify-center px-[10px] py-[2px] 2xl:px-3 2xl:py-1 bg-[#141414] border border-[#262626] rounded-[4px] 2xl:rounded-md text-[#98989A] font-normal font-inter text-[12px] 2xl:text-[16px] z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out'>
                        <p className="">New</p>
                    </button>
                </div>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Testimonials</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Contact Us</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Newsletter</NavLink>
            </div>
        </nav>
        <nav className="col-span-2 lg:col-span-1 pt-10 lg:pt-[60px] 2xl:pt-20">
            <NavLink to='/' className='font-inter text-white font-medium text-[16px] lg:text-lg 2xl:text-xl' >News</NavLink>
            <div className="mt-4 lg:mt-7 2xl:mt-9 flex flex-col items-start gap-3 2xl:gap-[18px]">
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Trending Stories</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Featured Videos</NavLink>
                <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Technology</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Health</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Politics</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Environment</NavLink>
            </div>
        </nav>
        <nav className="col-span-2 lg:col-span-1 pt-10 lg:pt-[60px] 2xl:pt-20">
            <NavLink to='/' className='font-inter text-white font-medium text-[16px] lg:text-lg 2xl:text-xl' >Podcasts</NavLink>
            <div className="mt-4 lg:mt-7 2xl:mt-9 flex flex-col items-start gap-3 2xl:gap-[18px]">
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>AI Revolution</NavLink>
                <div className="flex items-center gap-2">
                    <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>FE Verse</NavLink>
                    <button className='flex items-center justify-center px-[10px] py-[2px] 2xl:px-3 2xl:py-1 bg-[#141414] border border-[#262626] rounded-[4px] 2xl:rounded-md text-[#98989A] font-normal font-inter text-[12px] 2xl:text-[16px] z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out'>
                        <p className="">New</p>
                    </button>
                </div>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>TechTalk AI</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Tech Convo</NavLink>
            </div>
        </nav>
        <nav className="col-span-2 lg:col-span-1 pt-10 lg:pt-[60px] 2xl:pt-20">
            <NavLink to='/' className='font-inter text-white font-medium text-[16px] lg:text-lg 2xl:text-xl' >Blogs</NavLink>
            <div className="mt-4 lg:mt-7 2xl:mt-9 flex flex-col items-start gap-3 2xl:gap-[18px]">
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Cloud Computing</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>FE Development</NavLink>
                <div className="flex items-center gap-2">
                    <NavLink className='font-inter lg:text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>AI/ML</NavLink>
                    <button className='flex items-center justify-center px-[10px] py-[2px] 2xl:px-3 2xl:py-1 bg-[#141414] border border-[#262626] rounded-[4px] 2xl:rounded-md text-[#98989A] font-normal font-inter text-[12px] 2xl:text-[16px] z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out'>
                        <p className="">New</p>
                    </button>
                </div>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>BE Development</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>AI Ethics</NavLink>
                <NavLink className='font-inter text-sm 2xl:text-lg text-[#666666] hover:text-white trnasition-all duration-200'>Prompt Engr.</NavLink>
            </div>
        </nav>
        <nav className="col-span-4 lg:col-span-1 pt-10 lg:pt-[60px] 2xl:pt-20">
            <NavLink to='/' className='font-inter text-white font-medium text-[16px] lg:text-lg 2xl:text-xl' >Resources</NavLink>
            <div className="mt-4 lg:mt-7 2xl:mt-9 flex flex-wrap flex-row lg:flex-col items-start gap-3 2xl:gap-[18px]">
                <LandingPageButton text='Whitepapers' styles='flex items-center justify-center gap-5 2xl:gap-[14px] px-[14px] py-2 2xl:px-[16px] 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
                <LandingPageButton text='Ebooks' styles='flex items-center justify-center gap-5 2xl:gap-[14px] px-[14px] py-2 2xl:px-[16px] 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
                <LandingPageButton text='Reports' styles='flex items-center justify-center gap-5 2xl:gap-[14px] px-[14px] py-2 2xl:px-[16px] 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
                <LandingPageButton text='Research Papers' styles='flex items-center justify-center gap-5 2xl:gap-[14px] px-[14px] py-2 2xl:px-[16px] 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
            </div>
        </nav>
        </div>
        <div className="w-full flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between py-6 2xl:py-10 border-t border-t-[#262626] mt-10 lg:mt-[60px] 2xl:mt-20">
            <div className="flex items-center gap-2 order-2 lg:order-1">
                <NavLink className='text-[#666666] hover:text-white transition-all duration-200 ease-in-out font-normal font-inter text-sm 2xl:text-lg'>Terms & Conditions</NavLink>
                <img src={line} alt="Line" className="" />
                <NavLink className='text-[#666666] hover:text-white transition-all duration-200 ease-in-out font-normal font-inter text-sm 2xl:text-lg'>Privacy Policy</NavLink>
            </div>
            
            <div className="flex items-center gap-[14px] 2xl:gap-5 order-1 lg:order-2">
                <Link className="group">
                    <img src={twitterIcon} alt="twitter logo" className=" lg:size-5 2xl:size-6 group-hover:opacity-85 transition-all duration-200 ease-in-out" />
                </Link>
                <Link className="group">
                    <img src={mediumIcon} alt="Medium logo" className=" lg:size-5 2xl:size-6 group-hover:opacity-85 transition-all duration-200 ease-in-out" />
                </Link>
                <Link className="group">
                <img src={linkedinIcon} alt="LinkedIn logo" className=" lg:size-5 2xl:size-6 group-hover:opacity-85 transition-all duration-200 ease-in-out" />
                </Link>
            </div>

            <p className="text-[#666666] font-normal font-inter text-sm 2xl:text-lg order-3">© 2024 FutureTech. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer