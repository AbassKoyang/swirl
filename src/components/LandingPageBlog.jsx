import { useEffect, useState } from 'react';
import LandingPageButton from './LandingPageButton';


const LandingPageBlog = ({name, profile_pic, field, date, title, excerpt, no_likes, no_comments, no_shares}) => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{setisLoading(false)},
    1000)
  }, []);

  return (
    <div className="w-full flex flex-col px-5 py-10 lg:px-10 lg:py-[60px] 2xl:px-[162px] 2xl:py-[80px] border-y border-y-[#262626]">






      {isLoading && (
          <>
            <div className="w-full flex items-center justify-between">
              <div className="w-fit flex items-center">
                  <div className="flex gap-[10px] items-center lg:mr-[80px] 2xl:mr-[100px]">
                    <div className="size-[60px] 2xl:size-20 rounded-full bg-white/35 animate-pulse">
                    </div>
                    <div className="">
                      <h4 className='w-[150px] lg:w-[200px] h-5 2xl:w-[350px] 2xl:h-6 bg-white/35 animate-pulse mb-2 lg:mb-4 rounded-3xl'></h4>
                      <p className='w-[120px] lg:w-[180px] h-3 2xl:w-[300px] 2xl:h-4 bg-white/35 animate-pulse rounded-3xl'></p>
                    </div>
                  </div>

                <div className="hidden lg:flex flex-col">
                  <h5 className='lg:h-5 lg:w-40 2xl:h-9 2xl:w-52 lg:rounded-3xl bg-white/35 animate-pulse lg:mb-6  2xl:mb-[30px]'></h5>
                  <h3 className='lg:h-7 lg:w-60 2xl:h-12 2xl:w-72 lg:rounded-3xl bg-white/35 animate-pulse backdrop:lg:mb-[6px] mb-[10px]'></h3>
                  <p className='lg:h-3 lg:w-80 2xl:h-7 2xl:w-[350px] lg:rounded-3xl bg-white/35 animate-pulse lg:mb-6 mb-[30px]'></p>

                  <div className="flex gap-[6px] lg:gap-2 2xl:gap-[10px]">
                    <div className='lg:h-9 lg:w-20 2xl:h-12 2xl:w-24 lg:rounded-3xl bg-white/35 animate-pulse'>
                    </div>
                    <div className='lg:h-9 lg:w-20 2xl:h-12 2xl:w-24 lg:rounded-3xl bg-white/35 animate-pulse'>
                    </div>
                    <div className='lg:h-9 lg:w-20 2xl:h-12 2xl:w-24 lg:rounded-3xl bg-white/35 animate-pulse'>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-28 h-14 bg-white/35 animate-pulse rounded-xl'></div>
            </div>

          <div className="flex lg:hidden flex-col">
            <h5 className='lg:h-4 lg:w-8 2xl:h-6 2xl:w-12 lg:mb-6  2xl:mb-[30px]'></h5>
            <h3 className='lg:h-6 lg:w-12 2xl:h-8 2xl:w-15 lg:mb-[6px] mb-[10px]'></h3>
            <p className='lg:h-3 lg:w-16 2xl:h-5 2xl:w-20 lg:mb-6 mb-[30px]'></p>

            <div className="flex gap-[6px] lg:gap-2 2xl:gap-[10px]">
              <div className='h-8 w-20 rounded-3xl bg-white/35 animate-pulse'>
              </div>
              <div className='h-8 w-20 rounded-3xl bg-white/35 animate-pulse'>
              </div>
              <div className='h-8 w-20 rounded-3xl bg-white/35 animate-pulse'>
              </div>
            </div>
          </div>
          </>
      )} 

      {!isLoading && (
        <>
        <div className="w-full flex items-center justify-between">
          <div className="w-fit flex items-center">
            <div className="flex gap-[10px] items-center lg:mr-[80px] 2xl:mr-[100px]">
              <div className="size-[60px] 2xl:size-20 rounded-full overflow-hidden">
                <img src={profile_pic} alt="Profile pic" className='w-full object-cover' />
              </div>
              <div className="">
                <h4 className='font-inter font-medium text-white text-lg 2xl:text-xl mt-[2px]'>{name}</h4>
                <p className='font-inter font-regular text-[#98989A] text-[16px] 2xl:text-lg'>{field}</p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col">
              <h5 className='font-semibold text-[#98989A] text-[16px] lg:text-lg 2xl:text-xl lg:mb-6 2xl:mb-[30px]'>{date}</h5>
              <h3 className='font-inter font-semibold text-white text-lg lg:text-[16px] 2xl:text-[26px] lg:mb-[6px] mb-[10px]'>{title}</h3>
              <p className='font-inter font-regular text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg lg:mb-6 mb-[30px]'>{excerpt}</p>

              <div className="flex gap-[6px] lg:gap-2 2xl:gap-[10px]">
                <button className='flex items-center px-3 py-[6px] 2xl:px-4 2xl:py-2 lg:gap-[2px] 2xl:gap-1 lg:rounded-3xl bg-[#1A1A1A] border border-[#262626]'>
                  <svg className='size-6' aria-hidden={true} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Like</title>
                    <path d="M11.645 21.4107L11.6384 21.4072L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4072L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z" className='fill-[#FF5500]'/>
                  </svg>
                  <p className='font-kumbh font-normal  text-[#98989A] text-sm 2xl:text-lg'>{no_likes}k</p>
                </button>
                <button className='flex items-center px-3 py-[6px] 2xl:px-4 2xl:py-2 lg:gap-[2px] 2xl:gap-1 lg:rounded-3xl bg-[#1A1A1A] border border-[#262626] group'>
                <svg aria-hidden={true} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Comments</title>
                    <path d="M8.48581 19.6888C9.54657 20.2083 10.7392 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 14.1401 4.49356 15.665 5.34026 16.9341M8.48581 19.6888L4 20.5L5.34026 16.9341M8.48581 19.6888L8.49231 19.6877M5.34026 16.9341L5.34154 16.9308" className='stroke-[#666666] group-hover:stroke-white transition-all duration-200 ease-in-out' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <p className='font-kumbh font-normal  text-[#98989A] text-sm 2xl:text-lg'>{no_comments}</p>
                </button>
                <button className='flex items-center px-3 py-[6px] 2xl:px-4 2xl:py-2 lg:gap-[2px] 2xl:gap-1 lg:rounded-3xl bg-[#1A1A1A] border border-[#262626] group'>
                <svg aria-hidden={true} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Share</title>
                  <path d="M10.0384 14.4616L4.1719 11.7951C3.36454 11.4281 3.39898 10.2697 4.22673 9.95134L18.8999 4.30781C19.7087 3.99675 20.5033 4.79139 20.1922 5.60013L14.5487 20.2733C14.2303 21.1011 13.072 21.1355 12.705 20.3281L10.0384 14.4616ZM10.0384 14.4616L14.4231 10.077" className='stroke-[#666666] group-hover:stroke-white transition-all duration-200 ease-in-out' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                  <p className='font-kumbh font-normal  text-[#98989A] text-sm 2xl:text-lg'>{no_shares}</p>
                </button>
              </div>
            </div>
          </div>

          <LandingPageButton text='View Blog' styles='w-fit flex items-center justify-center gap-3 2xl:gap-[10px] px-[18px] py-4 2xl:px-[24px] 2xl:py-[18px] mt-[20px] 2xl:mt-[30px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:bg-[#1A1A1A] hover:font-medium transition-all duration-200 ease-in-out' />
        </div>

        {/* Mobile content */}

    <div className="flex lg:hidden flex-col">
    <h5 className='font-semibold text-[#98989A] text-[16px] lg:text-lg 2xl:text-xl mt-[30px] mb-5 lg:mb-6 2xl:mb-[30px]'>October 15, 2023</h5>
    <h3 className='font-inter font-semibold text-white text-lg lg:text-[16px] 2xl:text-[26px] mb-1 lg:mb-[6px] 2xl:mb-[10px]'>The Quantum Leap in Computing</h3>
    <p className='font-inter font-regular text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mb-5 lg:mb-6 2xl:mb-[30px]'>Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>

    <div className="flex gap-[6px] lg:gap-2 2xl:gap-[10px]">
      <button className='flex items-center px-3 py-[6px] 2xl:px-4 2xl:py-2 lg:gap-[2px] 2xl:gap-1 rounded-3xl bg-[#1A1A1A] border border-[#262626]'>
        <svg className='size-6' aria-hidden={true} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Like</title>
          <path d="M11.645 21.4107L11.6384 21.4072L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4072L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z" className='fill-[#FF5500]'/>
        </svg>
        <p className='font-kumbh font-normal  text-[#98989A] text-sm 2xl:text-lg'>24.5k</p>
      </button>
      <button className='flex items-center px-3 py-[6px] 2xl:px-4 2xl:py-2 lg:gap-[2px] 2xl:gap-1 rounded-3xl bg-[#1A1A1A] border border-[#262626] group'>
      <svg aria-hidden={true} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Comments</title>
          <path d="M8.48581 19.6888C9.54657 20.2083 10.7392 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 14.1401 4.49356 15.665 5.34026 16.9341M8.48581 19.6888L4 20.5L5.34026 16.9341M8.48581 19.6888L8.49231 19.6877M5.34026 16.9341L5.34154 16.9308" className='stroke-[#666666] group-hover:stroke-white transition-all duration-200 ease-in-out' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <p className='font-kumbh font-normal  text-[#98989A] text-sm 2xl:text-lg'>50</p>
      </button>
      <button className='flex items-center px-3 py-[6px] 2xl:px-4 2xl:py-2 lg:gap-[2px] 2xl:gap-1 rounded-3xl bg-[#1A1A1A] border border-[#262626] group'>
      <svg aria-hidden={true} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Share</title>
        <path d="M10.0384 14.4616L4.1719 11.7951C3.36454 11.4281 3.39898 10.2697 4.22673 9.95134L18.8999 4.30781C19.7087 3.99675 20.5033 4.79139 20.1922 5.60013L14.5487 20.2733C14.2303 21.1011 13.072 21.1355 12.705 20.3281L10.0384 14.4616ZM10.0384 14.4616L14.4231 10.077" className='stroke-[#666666] group-hover:stroke-white transition-all duration-200 ease-in-out' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

        <p className='font-kumbh font-normal  text-[#98989A] text-sm 2xl:text-lg'>20</p>
      </button>
    </div>
  </div>
  </>
  )}
  </div>
)
}

export default LandingPageBlog