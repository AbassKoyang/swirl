import { useState } from "react"
import LandingPageBlog from "./LandingPageBlog"

const LandingPageBlogLayout = () => {
    const [category, setCategory] = useState('all');
  return (
    <section className="w-full">
        <div className="w-full overflow-x-auto bg-[#141414]">
        <div className="min-w-full p-5 lg:p-10 2xl:px-[162px] gap-[14px] 2xl:py-[50px] lg:gap-[14px] 2xl:gap-5 bg-[#141414] flex items-center">
            <button onClick={() => setCategory('all')}  className={`w-[150px] h-[56px] px-16 py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'all' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } rounded-[7px] 2xl:rounded-lg`}>
                All
            </button>
        <button onClick={() => setCategory('design-systems')}  className={`w-[150px] h-[56px] px-16 py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'design-systems' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } rounded-[7px] 2xl:rounded-lg`}>
                Design Systems
            </button>
        <button onClick={() => setCategory('front-end')} className={`w-[150px] h-[56px] px-16 py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'front-end' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } rounded-[7px] 2xl:rounded-lg`}>
                Front-End
            </button>
        <button onClick={() => setCategory('ai-ml')} className={`w-[150px] h-[56px] px-16 py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'ai-ml' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } rounded-[7px] 2xl:rounded-lg`}>
                AI/ML
            </button>
        <button onClick={() => setCategory('cloud-computing')} className={`w-[150px] h-[56px] px-16 py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'cloud-computing' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } rounded-[7px] 2xl:rounded-lg`}>
                Cloud Computing
            </button>
        <button onClick={() => setCategory('back-end')} className={`w-[150px] h-[56px] px-16 py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'back-end' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } rounded-[7px] 2xl:rounded-lg`}>
                Back-End
            </button>
        </div>
        </div>
        <div className="w-full">
            {category === 'all' && (
                <LandingPageBlog title='all' />
            )}
            {category === 'design-systems' && (
                <LandingPageBlog title='design-systems' />
            )}
            {category === 'front-end' && (
                <LandingPageBlog title='front-end' />
            )}
            {category === 'ai-ml' && (
                <LandingPageBlog title='ai-ml' />
            )}
            {category === 'cloud-computing' && (
                <LandingPageBlog title='cloud-computing' />
            )}
            {category === 'back-end' && (
                <LandingPageBlog title='ai-ml' />
            )}
        </div>
    </section>
  )
}

export default LandingPageBlogLayout