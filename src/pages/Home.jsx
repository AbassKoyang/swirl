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
import vrLady from '../assets/vrlady.png'
import handImage from '../assets/Imagewhitepaper.png'
import eyeIcon from '../assets/eyeicon.svg'
import profileImage1 from '../assets/Profile1.png';
import profileImage2 from '../assets/Profile2.png';
import profileImage3 from '../assets/Profile3.png';
import profileImage4 from '../assets/Profile4.png';
import profileImage5 from '../assets/Profile5.png';
import Testimonial from "../components/Testimonial";
import swirlLogo from '../assets/swirl-logo.svg'
import RevolutionCard from "../components/RevolutionCard";

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
      <SubheadingCon heading="Unlock Valuable Knowledge with Swirls's Resources" text='Your Gateway to In-Depth Information' styles='w-full md:w-fit flex items-center justify-center gap-5 2xl:gap-[10px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] mt-[30px] lg:mt-0 bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' buttonText='View All Resources' containerStyles="flex-col lg:flex-row justify-between" />
      <div className="w-full grid grid-cols-5 px-5 lg:px-10 2xl:px-[162px] bg-[#141414] border-b border-b-[#262626]">
        <div className="col-span-5 lg:col-span-2 flex flex-col justify-center py-10 lg:py-[60px] 2xl:py-20 lg:pr-[60px] 2xl:pr-20 border-b border-b-[#262626] lg:border-r lg:border-r-[#262626]">
          <img src={ebookIcon} alt="Ebook Icon" className="size-[50px] lg:size-[60px] 2xl:size-20 mb-6 lg:mb-[30px] 2xl:mb-[50px]" />
          <h3 className="font-kumbh font-semibold text-white text-2xl lg:text-[30px] 2xl:text-[40px] mb-1 lg:mb-[10px] 2xl:mb-4">Ebooks</h3>
          <p className="font-normal font-inter text-[#98989A] text-sm lg:text-lg 2xl:text-xl mb-6 lg:mb-[30px] 2xl:mb-[50px]">Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
          <LandingPageButton text='Download Ebooks Now' styles='w-full flex items-center justify-center gap-5 2xl:gap-[14px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] bg-[#1A1A1A] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
          <div className="w-fit flex items-center gap-[30px] 2xl:gap-[50px] py-5 px-[30px] lg:p-5 2xl:p-[30px] mt-5 lg:mt-10 2xl:mt-[60px] rounded-xl bg-[#1A1A1A] border border-[#262626]">
            <div className="">
              <p className="font-inter text-sm 2xl:text-lg text-[#98989A] 2xl:mb-1">Downloaded by</p>
              <h5 className="text-white font-inter font-semibold text-lg lg:text-xl 2xl:text-2xl">10k+ Users</h5>
            </div>
            <img src={usersAvatar} alt="Users Avatar Grouped together" className="w-[150] h-[56px] 2xl:w-[193px] 2xl:h-[70px]" />
          </div>
        </div>
        <div className="col-span-5 lg:col-span-3 py-10 lg:p-[60px] 2xl:p-20 lg:pr-0">
            <div className="w-full flex flex-col lg:flex-row lg:justify-between mb-5 lg:mb-6 2xl:mb-[30px] lg:items-center ">
            <h4 className="font-inter font-semibold text-white text-lg lg:text-xl 2xl:text-2xl mb-[10px] mr-0 lg:mr-5">Variety of Topics</h4>
            <p className="font-inter lg:text-[16px] text-sm 2xl:text-lg text-[#98989A] lg:max-w-[70%]">
            Topics include Front-end (25%), backend (20%), cloud (15%), design systems (25%), and DevOps (15%).
            </p>
            </div>
            <img src={vrLady} alt="A lady wearing the vison pro" className="w-full h-[169px] lg:h-[332px] 2xl:h-[275px] mb-6 2xl:mb-[30px]" />
            <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-4">
              <div className="w-full lg:w-fit p-5 lg:p-6 2xl:p-[30px] bg-[#1A1A1A] border border-[#262626] rounded-xl">
                <p className="font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mb-[2px] lg:mb-1">Total Ebooks</p>
                <h3 className='font-semibold font-inter text-[16px] lg:text-lg 2xl:text-xl text-white '>Over 100 ebooks</h3>
              </div>
              <div className="w-full lg:w-[66%] flex items-center justify-between p-5 lg:p-6 2xl:p-[30px] bg-[#1A1A1A] border border-[#262626] rounded-xl">
                <div className="">
                <p className="font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mb-[2px] lg:mb-1">Download Formats</p>
                <h3 className='font-semibold font-inter text-[16px] lg:text-lg 2xl:text-xl text-white '>PDF format for access</h3>
                </div>
                <button className="flex items-center px-5 py-[14px] lg:px-5 lg:py-[14px] gap-1 2xl:px-6 2xl:py-[18px] 2xl:gap-[10px] bg-[#141414] border border-[#262626] rounded-lg 2xl:rounded-[10px]">
                  <p className="text-[#98989A] text-sm 2xl:text-lg">Preview</p>
                  <img src={eyeIcon} alt="Preview icon" className="size-5 2xl:size-6" />
                </button>
              </div>
            </div>
              <div className="w-full p-5 lg:p-6 2xl:p-[30px] bg-[#1A1A1A] border border-[#262626] mt-4 lg:mt-6 2xl:mt-[30px] rounded-xl">
                <p className="font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mb-1">Average Author Expertise</p>
                <h3 className=' text-white font-medium font-inter text-[16px] lg:text-lg 2xl:text-xl'>Ebooks are authored by renowned experts with an average of 15 years of experience</h3>
              </div>
            </div>
      </div>
      <div className="w-full grid grid-cols-5 px-5 lg:px-10 2xl:px-[162px] bg-[#141414] border-b border-b-[#262626]">
        <div className="col-span-5 lg:col-span-2 flex flex-col justify-center py-10 lg:py-[60px] 2xl:py-20 lg:pr-[60px] 2xl:pr-20 border-b border-b-[#262626] lg:border-r lg:border-r-[#262626]">
          <img src={ebookIcon} alt="Ebook Icon" className="size-[50px] lg:size-[60px] 2xl:size-20 mb-6 lg:mb-[30px] 2xl:mb-[50px]" />
          <h3 className="font-kumbh font-semibold text-white text-2xl lg:text-[30px] 2xl:text-[40px] mb-1 lg:mb-[10px] 2xl:mb-4">Whitepapers</h3>
          <p className="font-normal font-inter text-[#98989A] text-sm lg:text-lg 2xl:text-xl mb-6 lg:mb-[30px] 2xl:mb-[50px]">Dive into comprehensive reports and analyses with our collection of whitepapers.</p>
          <LandingPageButton text='Download Whitepapers Now' styles='w-full flex items-center justify-center gap-5 2xl:gap-[14px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] bg-[#1A1A1A] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' />
          <div className="w-fit flex items-center gap-[30px] 2xl:gap-[50px] py-5 px-[30px] lg:p-5 2xl:p-[30px] mt-5 lg:mt-10 2xl:mt-[60px] rounded-xl bg-[#1A1A1A] border border-[#262626]">
            <div className="">
              <p className="font-inter text-sm 2xl:text-lg text-[#98989A] 2xl:mb-1">Downloaded by</p>
              <h5 className="text-white font-inter font-semibold text-lg lg:text-xl 2xl:text-2xl">10k+ Users</h5>
            </div>
            <img src={usersAvatar} alt="Users Avatar Grouped together" className="w-[150] h-[56px] 2xl:w-[193px] 2xl:h-[70px]" />
          </div>
        </div>
        <div className="col-span-5 lg:col-span-3 py-10 lg:p-[60px] 2xl:p-20 lg:pr-0">
            <div className="w-full flex flex-col lg:flex-row lg:justify-between mb-5 lg:mb-6 2xl:mb-[30px] lg:items-center ">
            <h4 className="font-inter font-semibold text-white text-lg lg:text-xl 2xl:text-2xl mb-[10px] mr-0 lg:mr-5">Topics Coverage</h4>
            <p className="font-inter lg:text-[16px] text-sm 2xl:text-lg text-[#98989A] lg:max-w-[70%]">
            Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).
            </p>
            </div>
            <img src={handImage} alt="A lady wearing the vison pro" className="w-full h-[169px] lg:h-[332px] 2xl:h-[275px] mb-6 2xl:mb-[30px]" />
            <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-4">
              <div className="w-full lg:w-fit p-5 lg:p-6 2xl:p-[30px] bg-[#1A1A1A] border border-[#262626] rounded-xl">
                <p className="font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mb-[2px] lg:mb-1">Total Whitepapers</p>
                <h3 className='font-semibold font-inter text-[16px] lg:text-lg 2xl:text-xl text-white '>Over 50 whitepapers</h3>
              </div>
              <div className="w-full lg:w-[63%] flex items-center justify-between p-5 lg:p-6 2xl:p-[30px] bg-[#1A1A1A] border border-[#262626] rounded-xl">
                <div className="">
                <p className="font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mb-[2px] lg:mb-1">Download Formats</p>
                <h3 className='font-semibold font-inter text-[16px] lg:text-lg 2xl:text-xl text-white '>PDF format for access</h3>
                </div>
                <button className="flex items-center px-5 py-[14px] lg:px-5 lg:py-[14px] gap-1 2xl:px-6 2xl:py-[18px] 2xl:gap-[10px] bg-[#141414] border border-[#262626] rounded-lg 2xl:rounded-[10px]">
                  <p className="text-[#98989A] text-sm 2xl:text-lg">Preview</p>
                  <img src={eyeIcon} alt="Preview icon" className="size-5 2xl:size-6" />
                </button>
              </div>
            </div>
              <div className="w-full p-5 lg:p-6 2xl:p-[30px] bg-[#1A1A1A] border border-[#262626] mt-4 lg:mt-6 2xl:mt-[30px] rounded-xl">
                <p className="font-inter text-[#98989A] text-sm lg:text-[16px] 2xl:text-lg mb-1">Average Author Expertise</p>
                <h3 className=' text-white font-medium font-inter text-[16px] lg:text-lg 2xl:text-xl'>Whitepapers are authored by subject matter experts with an average of 20 years of experience.</h3>
              </div>
            </div>
          </div>
    </section>
    <section className="w-full">
    <SubheadingCon heading="Real Words from Real Readers" text='What our readers have to say' styles='w-full md:w-fit flex items-center justify-center gap-5 2xl:gap-[10px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] mt-[30px] lg:mt-0 bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20 hover:text-white hover:font-medium transition-all duration-200 ease-in-out' buttonText='View All Testimonials' containerStyles="flex-col lg:flex-row justify-between" />
    <div className="w-full grid grid-cols-3 px-5 lg:px-10 2xl:px-[162px]">
      <div className="col-span-3 lg:col-span-1 py-10 lg:py-[60px] 2xl:py-20 lg:pr-10 2xl:pr-[50px]">
        <Testimonial name="Sarah Thompson" testimony="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated." city="San Francisco, USA" profileImage={profileImage1} />
      </div>
      <div className="col-span-3 lg:col-span-1 py-10 lg:py-[60px] 2xl:py-20 lg:px-10 2xl:px-[50px] border-y border-y-[#262626] lg:border-y-0 lg:border-x lg:border-x-[#262626]">
        <Testimonial name="Raj Patel" testimony="The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions." city="Mumbai, India" profileImage={profileImage2} />
      </div>
      <div className="col-span-3 lg:col-span-1 py-10 lg:py-[60px] 2xl:py-20 lg:pl-10 2xl:pl-[50px]">
        <Testimonial name="Emily Adams" testimony="The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care." city="London, UK" profileImage={profileImage3} />
      </div>
    </div>
    <div className="w-full grid grid-cols-3 px-5 lg:px-10 2xl:px-[162px]">
      <div className="col-span-3 lg:col-span-1 py-10 lg:py-[60px] 2xl:py-20 lg:pr-10 2xl:pr-[50px] lg:border-t border-t-[#262626]">
        <Testimonial name="Alan Jackson" testimony="The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth." city="Houston, USA" profileImage={profileImage4} />
      </div>
      <div className="col-span-3 lg:col-span-1 py-10 lg:py-[60px] 2xl:py-20 lg:px-10 2xl:px-[50px] border-y border-y-[#262626] lg:border-y-0 lg:border-t lg:border-x lg:border-x-[#262626]">
        <Testimonial name="Jessica Miller" testimony="The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics." city="Boston, USA" profileImage={profileImage5} />
      </div>
      <div className="col-span-3 lg:col-span-1 py-10 lg:py-[60px] 2xl:py-20 lg:pl-10 2xl:pl-[50px] lg:border-t border-t-[#262626]">
        <Testimonial name="Diego Lopez" testimony="The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability." city="Barcelona, Spain" profileImage={profileImage1} />
      </div>
    </div>
    </section>
    <section className='w-full px-5 lg:px-10 2xl:px-[162px] py-10 lg:py-20 2xl:py-[120px] bg-[#1A1A1A]'>
      <div className="w-full flex items-center gap-5 lg:gap-[60px] 2xl:gap-20">
        <img src={swirlLogo} alt="Swirl Logo" className="size-[60px] lg:size-[120px] 2xl:size-[150px]" />
        <div className="">
        <span className="font-medium font-inter text-white text-sm lg:text-sm 2xl:text-xl bg-[#333333] py-1 px-2 2xl:py-[6px] 2xl:px-[10px] rounded-[4px]">Learn, connect and innovate</span>
        <h2 className="hidden lg:flex font-kumbh font-medium text-[26px] lg:text-[44px] 2xl:text-[58px] text-white capitalize mt-[10px] 2xl:mt-[16px]">Be Part of the Swirl Revolution</h2>
        <p className="hidden lg:flex font-inter lg:text-[16px] 2xl:text-lg lg:mt-5 2xl:mt-[30px] text-[#CCCCCC] max-w-[850px]">Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
        </div>
      </div>
        <h2 className="font-kumbh font-medium text-[26px] lg:text-[44px] 2xl:text-[58px] text-white capitalize mt-[10px] 2xl:mt-[16px]">Be Part of the Swirl Revolution</h2>
        <p className="lg:hidden font-inter text-sm text-[#CCCCCC] mt-1 max-w-[850px]">Immerse yourself in the world of future technology. Explore our comprehensive resources.</p>
      <div className="w-full grid grid-cols-3 bg-[#141414] p-[10px] 2xl:p-5 gap-[10px] 2xl:gap-5 rounded-[10px] 2xl:rounded-xl mt-10 lg:mt-[50px] 2xl:mt-[100px]">
        <RevolutionCard title="Resource Access" description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports." />
        <RevolutionCard title="Community Forum" description="Join our active community forum to discuss industry trends, share insights, and collaborate with peers." />
        <RevolutionCard title="Tech Events" description="Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge." />
      </div>
    </section>
    </section>
  )
}

export default Home
