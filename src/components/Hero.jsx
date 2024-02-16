import HeroStats from "./HeroStats";
import MoonEffect from '../assets/mooneffect.png'
import HeroAvatar from "./HeroAvatar";
import Arrow from "../assets/yellowarrow.svg"
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <section className="w-full grid grid-rows-2 lg:grid-cols-5 lg:grid-rows-none bg-[#141414]">
      <div className="row-span-1 lg:col-span-3 bg-transparent flex flex-col items-start justify-start pt-[100px]">
        <div className="w-full pr-10">
            <p className="text-[22px] font-medium font-kumbh text-[#666666]">Your Journey to Tomorrow Begins Here</p>
            <h1 className="text-[55px] leading-none 2xl:text-7xl font-medium font-kumbh text-white my-4 mt-6">Explore the Frontiers of Artificial Intelligence</h1>
            <p className="text-[16px] font-normal text-[#7E7E81] font-inter mb-[80px]">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
        </div>
        <HeroStats />
      </div>
      <div className="row-span-1 lg:col-span-2 bg-transparent pt-[100px] relative overflow-hidden flex flex-col items-start justify-end">
        <img src={MoonEffect} alt="Moon effect" className="w-[80%] h-[500px] absolute -top-3 -left-3" />
        <div className="p-[50px] 2xl:p-[80px]">
          <HeroAvatar />
          <p className="font-medium text-white text-2xl font-inter mt-5">Explore 12000+ Articles</p>
          <p className="font-normal text-[#98989A] text-lg font-inter mt-3">Over 12,000 articles on emerging tech trends and breakthroughs.</p>
          <button to='/' className="flex items-center justify-center gap-5 2xl:gap-[10px] px-[20px] py-4 2xl:px-[24px] 2xl:py-[18px] mt-[20px] 2xl:mt-[30px] bg-[#141414] border border-[#262626] rounded-[8px] 2xl:rounded-xl text-[#98989A] font-normal font-inter text-sm 2xl:text-lg">
            <p>Explore Articles</p>
            <img src={Arrow} alt="Arrow icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero