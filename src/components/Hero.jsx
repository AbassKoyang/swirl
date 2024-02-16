import HeroStats from "./HeroStats";
import MoonEffect from '../assets/mooneffect.png'

const Hero = () => {
  return (
    <section className="w-full grid grid-rows-2 lg:grid-cols-5 lg:grid-rows-none bg-[#141414]">
      <div className="row-span-1 lg:col-span-3 bg-transparent flex flex-col items-start justify-start pt-[100px]">
        <div className="w-full pr-10">
            <p className="text-2xl font-medium font-kumbh text-[#666666]">Your Journey to Tomorrow Begins Here</p>
            <h1 className="text-7xl font-medium font-kumbh text-white my-4 mt-6">Explore the Frontiers of Artificial Intelligence</h1>
            <p className="text-lg font-normal text-[#7E7E81] font-inter mb-[80px]">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
        </div>
        <HeroStats />
      </div>
      <div className="row-span-1 lg:col-span-2 bg-transparent pt-[150px] relative">
        <img src={MoonEffect} alt="Moon effect" className="w-full h-[400px]  absolute top-0 left-0" />
      </div>
    </section>
  )
}

export default Hero