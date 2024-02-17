import { Link } from "react-router-dom";
import linkArrow from '../assets/linkarrow.svg'

const ArrowLink = ({styles, location}) => {
  return (
    <Link to='/' aria-label={location} className={`size-[40px] lg:size-[44px] 2xl:size-[52px] bg-[#FFD11A] rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 ease-in-out ${styles}`}>
        <img src={linkArrow} alt="Arrow" className="size-[18px] lg:size-[18px] 2xl:size-[24px]" />
    </Link>
  )
}

export default ArrowLink;