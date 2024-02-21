import FeaturesCard from "../components/FeaturesCard";
import Hero from "../components/Hero"
import HeroFeaturesGrid from "../components/HeroFeaturesGrid";
import SubheadingCon from "../components/SubheadingCon";
import techBlogIcon from "../assets/techblogicon.svg"
import researchBlogIcon from "../assets/researchblogicon.svg"
import { Outlet } from "react-router-dom";
import LandingPageBlogLayout from "../components/LandingPageBlogLayout";

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
      <SubheadingCon heading='Explore in-depth blog posts on swirl' text='A Knowledge Treasure Trove' styles='w-full md:w-fit flex items-center justify-center gap-5 2xl:gap-[10px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] mt-[20px] 2xl:mt-[30px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:bg-[#1A1A1A] hover:font-medium transition-all duration-300 ease-in-out' buttonText='View All Blogs' containerStyles="flex-col lg:flex-row justify-between" />
      </section>
      <LandingPageBlogLayout />
    </section>
  )
}

export default Home