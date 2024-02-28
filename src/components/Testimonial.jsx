import ProfileImage from '../assets/Profile1.png';
import Star from '../assets/Shapestar.svg'

const Testimonial = () => {

  return (

    <div className="w-full flex flex-col items-center">

        <div className="flex items-center lg:gap-[10px] 2xl:gap-3 lg:mb-6 2xl:mb-10">

            <img src={ProfileImage} alt="Testimonial profile" className="rounded-full lg:size-[50px] 2xl:size-[60px]" />

        </div>

        <div className=''>

            <h4 className="font-inter font-medium text-white lg:text-lg 2xl:text-xl 2xl:mb-[2px]">Sarah Thompson</h4>

            <p className="font-inter font-normal text-[#666666] lg:text-[16px] 2xl:text-lg">San Francisco, USA</p>

        </div>

        <div className="w-full lg:px-6 2xl:px-[30px] lg:pb-6 2xl:pb-[30px] lg:pt-10 2xl:pt-[50px] lg:mt-[30px] 2xl:mt-10 bg-[#1A1A1A] border border-[#262626] lg:rounded-xl relative">
            <div className="flex items-center lg:gap-1 gap-2 lg:px-3 2xl:px-4 lg:py-2 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-3xl absolute lg:-top-[19px] 2xl:-top-[21px] left-[50%] translate-x-[-50%]">
                <img src={Star} alt="Star rating" className='lg:size-5' />
                <img src={Star} alt="Star rating" className='lg:size-5' />
                <img src={Star} alt="Star rating" className='lg:size-5' />
                <img src={Star} alt="Star rating" className='lg:size-5' />
                <img src={Star} alt="Star rating" className='lg:size-5' />
            </div>

            <p className="text-center text-white font-normal lg:text-[16px] 2xl:text-lg">

            The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.

            </p>

        </div>

    </div>

  )

}



export default Testimonial