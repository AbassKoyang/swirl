import { useState } from "react"
import LandingPageBlog from "./LandingPageBlog"

const LandingPageBlogLayout = () => {
    const [category, setCategory] = useState('all');
  return (
    <section className="w-full">
    <div className="w-full lg:p-10 2xl:px-[162px] 2xl:py-[50px] lg:gap-[14px] 2xl:gap-5 bg-[#141414] flex items-center">
            <button onClick={() => setCategory('all')}  className="lg:w-[200px] lg:h-[68px] 2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex justify-center items-center font-inter lg:text-sm 2xl:text-lg text-[#98989A] lg:rounded-[7px] 2xl:rounded-lg">
                All
            </button>
            <button onClick={() => setCategory('design-systems')}  className="lg:w-[200px] lg:h-[68px] 2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex justify-center items-center font-inter lg:text-sm 2xl:text-lg text-[#98989A] lg:rounded-[7px] 2xl:rounded-lg">
                Design Systems
            </button>
            <button onClick={() => setCategory('front-end')} className="lg:w-[200px] lg:h-[68px] 2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex justify-center items-center font-inter lg:text-sm 2xl:text-lg text-[#98989A] lg:rounded-[7px] 2xl:rounded-lg">
                Front-End
            </button>
            <button onClick={() => setCategory('ai-ml')} className="lg:w-[200px] lg:h-[68px] 2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex justify-center items-center font-inter lg:text-sm 2xl:text-lg text-[#98989A] lg:rounded-[7px] 2xl:rounded-lg">
                AI/ML
            </button>
            <button onClick={() => setCategory('cloud-computing')} className="lg:w-[200px] lg:h-[68px] 2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex justify-center items-center font-inter lg:text-sm 2xl:text-lg text-[#98989A] lg:rounded-[7px] 2xl:rounded-lg">
                Cloud Computing
            </button>
            <button onClick={() => setCategory('back-end')} className="lg:w-[200px] lg:h-[68px] 2xl:w-[250px] h-[87px] bg-transparent border border-[#262626] flex justify-center items-center font-inter lg:text-sm 2xl:text-lg text-[#98989A] lg:rounded-[7px] 2xl:rounded-lg">
                Back-End
            </button>
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