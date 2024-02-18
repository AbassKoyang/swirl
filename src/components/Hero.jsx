import HeroStats from "./HeroStats";
import MoonEffect from '../assets/mooneffect.svg';
import HeroAvatar from "./HeroAvatar";
import LandingPageButton from "./LandingPageButton";

const Hero = () => {

  return (
    <section className="w-full grid grid-cols-5 bg-[#141414]">
      <div className="col-span-5 lg:col-span-3 self-start bg-transparent flex flex-col items-start justify-start pt-[40px] lg:pt-[100px] px-5 lg:pl-10 2xl:pl-[162px] lg:pr-0">
        <div className="w-full lg:pr-10 mb-[30px] lg:mb-[80px]">
            <p className="text-lg lg:text-[22px] font-medium font-kumbh text-[#666666]">Your Journey to Tomorrow Begins Here</p>
            <h1 className="text-[30px] lg:text-[55px] leading-none 2xl:text-7xl font-medium font-kumbh text-white my-[14px] lg:my-4 lg:mt-6">Explore the Frontiers of Artificial Intelligence</h1>
            <p className="text-sm lg:text-[16px] font-normal text-[#7E7E81] font-inter">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
        </div>
        <HeroStats />
      </div>
      <div className="col-span-5 lg:col-span-2 self-start lg:self-stretch bg-transparent pt-[100px] relative overflow-hidden flex flex-col items-start justify-end px-5 lg:pl-10 lg:pr-0 2xl:pr-[162px] border-l border-l-[#262626]">
        <img src={MoonEffect} alt="Moon effect" className="w-full lg:w-[80%] lg:h-[500px] absolute -top-2 -left-2 lg:-top-3 lg:-left-3" />
        <div className="p-[24px] lg:p-[50px] 2xl:p-[80px] z-20">
          <HeroAvatar />
          <p className="font-medium text-white text-lg lg:text-2xl font-inter mt-5">Explore 12000+ Articles</p>
          <p className="font-normal text-[#98989A] text-sm lg:text-lg font-inter mt-3">Over 12,000 articles on emerging tech trends and breakthroughs.</p>
          <LandingPageButton text='Explore Articles' styles='w-full md:w-fit flex items-center justify-center gap-5 2xl:gap-[10px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] mt-[20px] 2xl:mt-[30px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg z-20' />
        </div>
      </div>
    </section>
  )
}

export default Hero