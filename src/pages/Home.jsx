import FeaturesCard from "../components/FeaturesCard";
import Hero from "../components/Hero"
import HeroFeaturesGrid from "../components/HeroFeaturesGrid";
import SubheadingCon from "../components/SubheadingCon";
import techBlogIcon from "../assets/techblogicon.svg"
import researchBlogIcon from "../assets/researchblogicon.svg"

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-[#141414] max-w-[1900px]">
      <Hero /> 
      <HeroFeaturesGrid />
      <section className="w-full">
      <SubheadingCon heading="Swirl Features" text='Unlock the Power of' styles='hidden' />
      <div className="w-full grid grid-cols-3 border-b border-b-[#262626]">
        <div className="col-span-1 lg:pl-10 pr-[60px] 2xl:pl-[162px] 2xl:pr-[80px] border-r border-r-[#262626] flex flex-col justify-center">
          <img src={techBlogIcon} alt="Tech blog icon" className="lg:size-[60px] 2xl:size-[80px]" />
          <h3 className="capitalize font-semibold font-kumbh text-white lg:text-3xl 2xl:text-[40px] lg:mt-10 2xl:mt-[50px]">Swirl technology blog</h3>
          <p className="font-normal font-inter text-[#98989A] lg:text-[16px]n 2xl:text-lg lg:mt-[10px] 2xl:mt-4">Stay informed with our blog section dedicated to future technology.</p>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-5 lg:p-[60px] lg:pr-10 2xl:p-[80px] 2xl:pr-[162px]">
          <FeaturesCard feature='Quantity' description='Over 1,000 articles on emerging tech trends and breakthroughs.' />
          <FeaturesCard feature='Variety' description='Articles cover fields like AI, robotics, biotechnology, and more.' />
          <FeaturesCard feature='Frequency' description='Fresh content added daily to keep you up to date.' />
          <FeaturesCard feature='Authoritative' description='Written by our team of tech experts and industry professionals.' />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 border-b border-b-[#262626]">
        <div className="col-span-1 lg:pl-10 pr-[60px] 2xl:pl-[162px] 2xl:pr-10 border-r border-r-[#262626] flex flex-col justify-center">
          <img src={techBlogIcon} alt="Tech blog icon" className="lg:size-[60px] 2xl:size-[80px]" />
          <h3 className="capitalize font-semibold font-kumbh text-white lg:text-3xl 2xl:text-[40px] lg:mt-10 2xl:mt-[50px]">Research Insights Blogs</h3>
          <p className="font-normal font-inter text-[#98989A] lg:text-[16px]n 2xl:text-lg lg:mt-[10px] 2xl:mt-4">Dive deep into future technology concepts with our research section.</p>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-5 lg:p-[60px] lg:pr-[80px] 2xl:p-[80px] 2xl:pr-[162px]">
          <FeaturesCard feature='Depth' description='500+ research articles for in-depth understanding.' />
          <FeaturesCard feature='Graphics' description='Visual aids and infographics to enhance comprehension.' />
          <FeaturesCard feature='Trends' description='Explore emerging trends in future technology research.' />
          <FeaturesCard feature='Contributors' description='Contributions from tech researchers and academics.' />
        </div>
      </div>
      </section>
    </section>
  )
}

export default Home