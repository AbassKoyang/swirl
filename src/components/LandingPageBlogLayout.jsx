import LandingPageBlog from "./LandingPageBlog"

const LandingPageBlogLayout = () => {
  return (
    <section className="w-full">
    <div className="2xl:px-[162px] 2xl:py-[50px] 2xl:gap-5 bg-[#141414] flex items-center">
            <button to='sneakpeek/all' className="2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex jutify-center items-center font-inter 2xl:text-lg text-[#98989A] 2xl:rounded-lg">
                All
            </button>
            <button to='sneakpeek/design-systems' className="2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex jutify-center items-center font-inter 2xl:text-lg text-[#98989A] 2xl:rounded-lg">
                Design Systems
            </button>
            <button className="2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex jutify-center items-center font-inter 2xl:text-lg text-[#98989A] 2xl:rounded-lg">
                Front-End
            </button>
            <button className="2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex jutify-center items-center font-inter 2xl:text-lg text-[#98989A] 2xl:rounded-lg">
                AI/ML
            </button>
            <button className="2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex jutify-center items-center font-inter 2xl:text-lg text-[#98989A] 2xl:rounded-lg">
                Cloud Computing
            </button>
            <button className="2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex jutify-center items-center font-inter 2xl:text-lg text-[#98989A] 2xl:rounded-lg">
                Back-End
            </button>
        </div>
        <div className="w-full">
            <LandingPageBlog title='book'  />
        </div>
    </section>
  )
}

export default LandingPageBlogLayout