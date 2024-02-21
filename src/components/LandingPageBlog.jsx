import blogAuthorPic1 from '../assets/heroavatar1.png';
import blogAuthorPic2 from '../assets/heroavatar2.png';
import blogAuthorPic3 from '../assets/heroavatar3.png';
import LandingPageButton from './LandingPageButton';
const LandingPageBlog = ({title}) => {
  return (
    <div className="w-full flex items-center justify-between 2xl:px-[162px] 2xl:py-[80px] border-b border-b-[#262626]">
      <div className="flex gap-[10px] items-center">
        <div className="2xl:size-20 rounded-full overflow-hidden">
          <img src={blogAuthorPic1} alt="Profile pic" className='w-full object-cover' />
        </div>
        <div className="">
          <h4 className='font-inter font-medium text-white 2xl:text-xl mt-[2px]'>John Techson</h4>
          <p className='font-inter font-regular text-[#98989A] 2xl:text-lg'>Cloud Computing</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h5 className='font-semibold text-[#98989A] 2xl:text-xl mb-[30px]'>October 15, 2023</h5>
        <h3 className='font-inter font-semibold text-white 2xl:text-[26px] mb-[10px]'>The Quantum Leap in Computing</h3>
        <p className='font-inter font-regular text-[#98989A] 2xl:text-lg mb-[30px]'>Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
        <div className="flex gap-[10px]">
          <button className='flex items-center 2xl:px-4 2xl:py-2 2xl:gap-1 2xl:rounded-3xl bg-[#1A1A1A] border border-[#262626]'>
            <svg className='size-6' aria-hidden={true} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Like</title>
              <path d="M11.645 21.4107L11.6384 21.4072L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4072L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z" fill="#FF5500"/>
            </svg>
            <p className='font-kumbh font-normal  text-[#98989A] 2xl:text-lg'>24.5k</p>
          </button>
          <button className='flex items-center 2xl:px-4 2xl:py-2 2xl:gap-1 2xl:rounded-3xl bg-[#1A1A1A] border border-[#262626]'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Comments</title>
              <path d="M8.48581 19.6888C9.54657 20.2083 10.7392 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 14.1401 4.49356 15.665 5.34026 16.9341M8.48581 19.6888L4 20.5L5.34026 16.9341M8.48581 19.6888L8.49231 19.6877M5.34026 16.9341L5.34154 16.9308" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <p className='font-kumbh font-normal  text-[#98989A] 2xl:text-lg'>50</p>
          </button>
          <button className='flex items-center 2xl:px-4 2xl:py-2 2xl:gap-1 2xl:rounded-3xl bg-[#1A1A1A] border border-[#262626]'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Share</title>
            <path d="M10.0384 14.4616L4.1719 11.7951C3.36454 11.4281 3.39898 10.2697 4.22673 9.95134L18.8999 4.30781C19.7087 3.99675 20.5033 4.79139 20.1922 5.60013L14.5487 20.2733C14.2303 21.1011 13.072 21.1355 12.705 20.3281L10.0384 14.4616ZM10.0384 14.4616L14.4231 10.077" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

            <p className='font-kumbh font-normal  text-[#98989A] 2xl:text-lg'></p>
          </button>
        </div>
      </div>

      <LandingPageButton text='View Blog' styles='w-full md:w-fit flex items-center justify-center gap-5 2xl:gap-[10px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] mt-[20px] 2xl:mt-[30px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:bg-[#1A1A1A] hover:font-medium transition-all duration-300 ease-in-out' />
    </div>
  )
}

export default LandingPageBlog