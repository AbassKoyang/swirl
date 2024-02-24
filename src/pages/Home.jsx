import FeaturesCard from "../components/FeaturesCard";
import Hero from "../components/Hero"
import HeroFeaturesGrid from "../components/HeroFeaturesGrid";
import SubheadingCon from "../components/SubheadingCon";
import techBlogIcon from "../assets/techblogicon.svg"
import researchBlogIcon from "../assets/researchblogicon.svg"
import LandingPageBlogLayout from "../components/LandingPageBlogLayout";
import LandingPageButton from "../components/LandingPageButton";
import ebookIcon from '../assets/ebookicon.svg'
import usersAvatar from '../assets/usersavatargroup.svg'

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-[#141414] max-w-[1900px]">
      <Hero /> 
      <HeroFeaturesGrid />
      <section className="w-full">
      <SubheadingCon heading="Swirl Features" text='Unlock the Power of' styles='hidden' />
      <div className="w-full grid grid-cols-3 px-5 border-b border-b-[#262626]">
        <div className="col-span-3 lg:col-span-1 py-[50px] lg:py-0 lg:pl-10 pr-[60px] 2xl:pl-[162px] 2xl:pr-[80px] border-b border-b-[#262626] lg:border-r lg:border-r-[#262626] flex flex-col justify-center">
          <img src={techBlogIcon} alt="Tech blog icon" className="size-10 lg:size-[60px] 2xl:size-[80px]" />
          <h3 className="capitalize font-semibold font-kumbh text-white text-2xl lg:text-3xl 2xl:text-[40px] mt-5 lg:mt-10 2xl:mt-[50px]">Swirl technology blog</h3>
          <p className="font-normal font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mt-[6px] lg:mt-[10px] 2xl:mt-4">Stay informed with our blog section dedicated to future technology.</p>
        </div>
        <div className="col-span-3 lg:col-span-2 grid grid-cols-2 gap-[10px] lg:gap-5 px-4 py-[30px] lg:p-[60px] lg:pr-10 2xl:p-[80px] 2xl:pr-[162px]">
          <FeaturesCard feature='Quantity' description='Over 1,000 articles on emerging tech trends and breakthroughs.' />
          <FeaturesCard feature='Variety' description='Articles cover fields like AI, robotics, biotechnology, and more.' />
          <FeaturesCard feature='Frequency' description='Fresh content added daily to keep you up to date.' />
          <FeaturesCard feature='Authoritative' description='Written by our team of tech experts and industry professionals.' />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 px-5 border-b border-b-[#262626]">
        <div className="col-span-3 lg:col-span-1 py-[50px] lg:py-0 lg:pl-10 pr-[60px] 2xl:pl-[162px] 2xl:pr-[80px] border-b border-b-[#262626] lg:border-r lg:border-r-[#262626] flex flex-col justify-center">
          <img src={researchBlogIcon} alt="Tech blog icon" className="size-10 lg:size-[60px] 2xl:size-[80px]" />
          <h3 className="capitalize font-semibold font-kumbh text-white text-2xl lg:text-3xl 2xl:text-[40px] mt-5 lg:mt-10 2xl:mt-[50px]">Research Insights Blogs</h3>
          <p className="font-normal font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mt-[6px] lg:mt-[10px] 2xl:mt-4">Dive deep into future technology concepts with our research section.</p>
        </div>
        <div className="col-span-3 lg:col-span-2 grid grid-cols-2 gap-[10px] lg:gap-5 px-4 py-[30px] lg:p-[60px] lg:pr-[80px] 2xl:p-[80px] 2xl:pr-[162px]">
          <FeaturesCard feature='Depth' description='500+ research articles for in-depth understanding.' />
          <FeaturesCard feature='Graphics' description='Visual aids and infographics to enhance comprehension.' />
          <FeaturesCard feature='Trends' description='Explore emerging trends in future technology research.' />
          <FeaturesCard feature='Contributors' description='Contributions from tech researchers and academics.' />
        </div>
      </div>
      </section>
      <section className='w-full'>
      <SubheadingCon heading='Explore in-depth blog posts on swirl' text='A Knowledge Treasure Trove' styles='w-full md:w-fit flex items-center justify-center gap-5 2xl:gap-[10px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] mt-[20px] 2xl:mt-[30px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' buttonText='View All Blogs' containerStyles="flex-col lg:flex-row justify-between" />
      <LandingPageBlogLayout />
      </section>
    <section className='w-full'>
      <SubheadingCon heading="Unlock Valuable Knowledge with Swirls's Resources" text='Your Gateway to In-Depth Information' styles='w-full md:w-fit flex items-center justify-center gap-5 2xl:gap-[10px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' buttonText='View All Resources' containerStyles="flex-col lg:flex-row justify-between" />
      <div className="w-full grid grid-cols-5 px-5 lg:px-10 2xl:px-[162px] bg-[#141414]">
        <div className="col-span-2 flex flex-col justify-center 2xl:pt-[80px] 2xl:pr-20 border-r border-r-[#262626]">
          <img src={ebookIcon} alt="Ebook Icon" className="lg:size-[60px] 2xl:size-20 lg:mt-[30px] 2xl:mb-[50px]" />
          <h3 className="font-kumbh font-semibold text-white lg:text-[30px] 2xl:text-[40px] lg:mb-[10px] 2xl:mb-4">Ebooks</h3>
          <p className="font-normal font-inter text-[#98989A] lg:text-lg 2xl:text-xl lg:mb-[30px] 2xl:mb-[50px]">Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
          <LandingPageButton text='Download Ebooks Now' styles='w-full md:w-fit 2xl:w-full flex items-center justify-center gap-5 2xl:gap-[14px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] bg-[#1A1A1A] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
          <div className="w-fit flex items-center lg:gap-[30px] 2xl:gap-[50px] lg:p-5 2xl:p-[30px] lg:mt-10 2xl:mt-[60px] rounded-xl bg-[#1A1A1A] border border-[#262626]">
            <div className="">
              <p className="font-inter lg:text-sm 2xl:text-lg text-[#98989A] 2xl:mb-1">Downloaded by</p>
              <h5 className="text-white font-inter font-semibold lg:text-xl 2xl:text-2xl">10k+ Users</h5>
            </div>
            <img src={usersAvatar} alt="Users Avatar Grouped together" className="lg:w-[150] h-[56px] 2xl:w-[193px] 2xl:h-[70px]" />
          </div>
        </div>
        <div className="col-span-3"></div>
      </div>
    </section>
    </section>
  )
}

export default Home