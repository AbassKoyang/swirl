import { useState } from "react"
import LandingPageBlog from "./LandingPageBlog"

const LandingPageBlogLayout = () => {
    const [category, setCategory] = useState('all');
  return (
    <section className="w-full">
        <div className="w-full overflow-x-auto bg-[#141414]">
        <div className="w-[1300px] lg:w-full p-5 lg:p-10 2xl:px-[162px] 2xl:py-[50px] gap-[14px] lg:gap-[14px] 2xl:gap-5 bg-[#141414] flex items-center justify-center">
            <button onClick={() => setCategory('all')}  className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'all' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                All
            </button>
        <button onClick={() => setCategory('design-systems')}  className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'design-systems' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                Design Systems
            </button>
        <button onClick={() => setCategory('front-end')} className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'front-end' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                Front-End
            </button>
        <button onClick={() => setCategory('ai-ml')} className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'ai-ml' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                AI/ML
            </button>
        <button onClick={() => setCategory('cloud-computing')} className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'cloud-computing' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                Cloud Computing
            </button>
        <button onClick={() => setCategory('back-end')} className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'back-end' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                Back-End
            </button>
        </div>
        </div>
        <div className="w-full">
            {category === 'all' && (
                <LandingPageBlog name="John Techson" field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
            )}
            {category === 'design-systems' && (
                <LandingPageBlog name="John Techson" field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
            )}
            {category === 'front-end' && (
                <LandingPageBlog name="John Techson" field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
            )}
            {category === 'ai-ml' && (
                <LandingPageBlog name="John Techson" field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
            )}
            {category === 'cloud-computing' && (
                <LandingPageBlog name="John Techson" field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
            )}
            {category === 'back-end' && (
                <LandingPageBlog name="John Techson" field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
            )}
        </div>
    </section>
  )
}

export default LandingPageBlogLayout