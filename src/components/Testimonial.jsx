import Star from '../assets/Shapestar.svg'

const Testimonial = ({testimony, name, profileImage, city}) => {

  return (

    <div className="w-full flex flex-col items-center">

        <div className="flex items-center lg:gap-[10px] 2xl:gap-3 mb-4 lg:mb-6 2xl:mb-10">

            <img src={profileImage} alt="Testimonial profile" className="rounded-full size-[50px] lg:size-[50px] 2xl:size-[60px]" />

        </div>

        <div className=''>

            <h4 className="font-inter font-medium text-white text-lg 2xl:text-xl 2xl:mb-[2px]">{name}</h4>

            <p className="font-inter font-normal text-[#666666] text-[16px] 2xl:text-lg">{city}</p>

        </div>

        <div className="w-full px-5 pt-[30px] pb-5 lg:px-6 2xl:px-[30px] lg:pb-6 2xl:pb-[30px] lg:pt-10 2xl:pt-[50px] mt-[30px] 2xl:mt-10 bg-[#1A1A1A] border border-[#262626] rounded-[10px] lg:rounded-xl relative">
            <div className="flex items-center gap-1 2xl:gap-2 px-3 2xl:px-4 py-2 2xl:py-[10px] bg-[#141414] border border-[#262626] rounded-3xl absolute -top-[19px] 2xl:-top-[21px] left-[50%] translate-x-[-50%]">
                <img src={Star} alt="Star rating" className='size-5 2xl:size-6' />
                <img src={Star} alt="Star rating" className='size-5 2xl:size-6' />
                <img src={Star} alt="Star rating" className='size-5 2xl:size-6' />
                <img src={Star} alt="Star rating" className='size-5 2xl:size-6' />
                <img src={Star} alt="Star rating" className='size-5 2xl:size-6' />
            </div>

            <p className="text-center text-white font-normal text-sm lg:text-[16px] 2xl:text-lg">
                {testimony}
            </p>

        </div>

    </div>

  )

}



export default Testimonial