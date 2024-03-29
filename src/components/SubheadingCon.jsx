import LandingPageButton from "./LandingPageButton"

const SubheadingCon = ({styles, text, buttonText, heading, containerStyles}) => {
  return (
    <div className={`w-full bg-[#1A1A1A] py-[40px] px-5 lg:py-[80px] lg:px-10 2xl:py-[120px] 2xl:px-[162px] border-y border-y-[#262626]  flex items-center ${containerStyles}`}>
        <div className="lg:w-[70%]">
        <span className="font-medium font-inter text-white text-sm lg:text-sm 2xl:text-xl bg-[#333333] py-1 px-2 2xl:py-[6px] 2xl:px-[10px] rounded-[4px]">{text}</span>
        <h2 className="font-kumbh font-medium  text-[26px] lg:text-[44px] 2xl:text-[58px] text-white capitalize mt-[10px] 2xl:mt-[16px]">{heading}</h2>
        </div>
        <LandingPageButton styles={styles} text={buttonText} />
    </div>
  )
}

export default SubheadingCon