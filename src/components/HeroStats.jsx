
const HeroStats = () => {
  return (
    <div className="w-full border-t border-t-[#262626] grid grid-cols-3 h-[160px] bg-transparent">
        <div className="col-span-1 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-5xl font-inter font-semibold text-white mb-2">300<span className="text-[#FFD11A]">+</span></h3>
            <p className="text-sm lg:text-lg font-normal font-inter text-[#98989A]">Resources Available</p>
        </div>
        <div className="col-span-1 pl-10 flex flex-col justify-center border-x border-x-[#262626]">
            <h3 className="text-2xl lg:text-5xl font-inter font-semibold text-white mb-2">12k<span className="text-[#FFD11A]">+</span></h3>
                <p className="text-sm lg:text-lg font-normal font-inter text-[#98989A]">Tech Articles</p>
            </div>
        <div className="col-span-1 pl-10 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-5xl font-inter font-semibold text-white mb-2">10k<span className="text-[#FFD11A]">+</span></h3>
                <p className="text-sm lg:text-lg font-normal font-inter text-[#98989A]">Active Users</p>
            </div>
    </div>
  )
}

export default HeroStats