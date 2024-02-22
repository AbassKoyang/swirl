import { useState } from "react"
import LandingPageBlog from "./LandingPageBlog";
import blogAuthorPic1 from '../assets/blogauthor1.png';
import blogAuthorPic2 from '../assets/blogauthor2.png';
import blogAuthorPic3 from '../assets/blogauthor3.png';

const LandingPageBlogLayout = () => {
    const [category, setCategory] = useState('all');
  return (
    <section className="w-full">
        <div className="w-full overflow-x-auto bg-[#141414]">
        <div className="w-[1300px] lg:w-full p-5 lg:p-10 2xl:px-[162px] 2xl:py-[50px] gap-[14px] lg:gap-[14px] 2xl:gap-5 bg-[#141414] flex items-center justify-center">
            <button onClick={() => setCategory('all')}  className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'all' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:text-white hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                All
            </button>
        <button onClick={() => setCategory('design-systems')}  className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'design-systems' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:text-white hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                Design Systems
            </button>
        <button onClick={() => setCategory('front-end')} className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'front-end' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:text-white hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                Front-End
            </button>
        <button onClick={() => setCategory('ai-ml')} className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'ai-ml' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:text-white hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                AI/ML
            </button>
        <button onClick={() => setCategory('cloud-computing')} className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'cloud-computing' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:text-white hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                Cloud Computing
            </button>
        <button onClick={() => setCategory('back-end')} className={`px-16 h-[56px] py-4 lg:py-0 lg:px-0 lg:w-[200px] lg:h-[68px] 2xl:w-[250px] 2xl:h-[87px] border border-[#262626] flex justify-center items-center font-inter font-meium lg:font-normal text-sm 2xl:text-lg ${category === 'back-end' ? 'text-white bg-[#1A1A1A]' : 'text-[#98989A]' } hover:text-white hover:bg-[#1A1A1A] rounded-[7px] 2xl:round-lg transition-all duration-200 ease-in-out`}>
                Back-End
            </button>
        </div>
        </div>
        <div className="w-full">
            {category === 'all' && (
                <>
                <LandingPageBlog name="John Techson" profile_pic={blogAuthorPic1} field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
                <LandingPageBlog name="Sarah Ethicist" profile_pic={blogAuthorPic2} field="AI Ethics" date="November 5, 2023" title="The Ethical Dilemmas of AI" excerpt="A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency." no_likes={32} no_comments={72} no_shares={18} />
                <LandingPageBlog name="John Doe" profile_pic={blogAuthorPic3} field="Front-end Dev" date="December 10, 2023" title="The Ultimate Raectjs Roadmap" excerpt="A detailed roadmap highlighting all of the relevant aspects of react you have to learn." no_likes={20} no_comments={31} no_shares={12} />
                </>
            )}
            {category === 'design-systems' && (
                <>
                <LandingPageBlog name="John Techson" profile_pic={blogAuthorPic1} field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
                <LandingPageBlog name="Sarah Ethicist" profile_pic={blogAuthorPic2} field="AI Ethics" date="November 5, 2023" title="The Ethical Dilemmas of AI" excerpt="A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency." no_likes={32} no_comments={72} no_shares={18} />
                <LandingPageBlog name="John Doe" profile_pic={blogAuthorPic3} field="Front-end Dev" date="December 10, 2023" title="The Ultimate Raectjs Roadmap" excerpt="A detailed roadmap highlighting all of the relevant aspects of react you have to learn." no_likes={20} no_comments={31} no_shares={12} />
                </>
            )}
            {category === 'front-end' && (
                <>
                <LandingPageBlog name="John Techson" profile_pic={blogAuthorPic1} field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
                <LandingPageBlog name="Sarah Ethicist" profile_pic={blogAuthorPic2} field="AI Ethics" date="November 5, 2023" title="The Ethical Dilemmas of AI" excerpt="A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency." no_likes={32} no_comments={72} no_shares={18} />
                <LandingPageBlog name="John Doe" profile_pic={blogAuthorPic3} field="Front-end Dev" date="December 10, 2023" title="The Ultimate Raectjs Roadmap" excerpt="A detailed roadmap highlighting all of the relevant aspects of react you have to learn." no_likes={20} no_comments={31} no_shares={12} />
                </>
            )}
            {category === 'ai-ml' && (
                <>
                <LandingPageBlog name="John Techson" profile_pic={blogAuthorPic1} field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
                <LandingPageBlog name="Sarah Ethicist" profile_pic={blogAuthorPic2} field="AI Ethics" date="November 5, 2023" title="The Ethical Dilemmas of AI" excerpt="A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency." no_likes={32} no_comments={72} no_shares={18} />
                <LandingPageBlog name="John Doe" profile_pic={blogAuthorPic3} field="Front-end Dev" date="December 10, 2023" title="The Ultimate Raectjs Roadmap" excerpt="A detailed roadmap highlighting all of the relevant aspects of react you have to learn." no_likes={20} no_comments={31} no_shares={12} />
                </>
            )}
            {category === 'cloud-computing' && (
                <>
                <LandingPageBlog name="John Techson" profile_pic={blogAuthorPic1} field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
                <LandingPageBlog name="Sarah Ethicist" profile_pic={blogAuthorPic2} field="AI Ethics" date="November 5, 2023" title="The Ethical Dilemmas of AI" excerpt="A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency." no_likes={32} no_comments={72} no_shares={18} />
                <LandingPageBlog name="John Doe" profile_pic={blogAuthorPic3} field="Front-end Dev" date="December 10, 2023" title="The Ultimate Raectjs Roadmap" excerpt="A detailed roadmap highlighting all of the relevant aspects of react you have to learn." no_likes={20} no_comments={31} no_shares={12} />
                </>
            )}
            {category === 'back-end' && (
                <>
                <LandingPageBlog name="John Techson" profile_pic={blogAuthorPic1} field="Cloud Computing" date="October 15, 2023" title="The Quantum Leap in Computing" excerpt="Explore the revolution in quantum computing, its applications, and its potential impact on various industries." no_likes={24.5} no_comments={50} no_shares={20} />
                <LandingPageBlog name="Sarah Ethicist" profile_pic={blogAuthorPic2} field="AI Ethics" date="November 5, 2023" title="The Ethical Dilemmas of AI" excerpt="A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency." no_likes={32} no_comments={72} no_shares={18} />
                <LandingPageBlog name="John Doe" profile_pic={blogAuthorPic3} field="Front-end Dev" date="December 10, 2023" title="The Ultimate Raectjs Roadmap" excerpt="A detailed roadmap highlighting all of the relevant aspects of react you have to learn." no_likes={20} no_comments={31} no_shares={12} />
                </>
            )}
        </div>
    </section>
  )
}

export default LandingPageBlogLayout