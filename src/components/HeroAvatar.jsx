import Heroavatar1 from '../assets/heroavatar1.png'
import Heroavatar2 from '../assets/heroavatar2.png'
import Heroavatar3 from '../assets/heroavatar3.png'
import Heroavatar4 from '../assets/heroavatar4.png'
const HeroAvatar = () => {
  return (
    <div className="w-[148px] md:w-[228px] h-[56px] md:h-[80px] p-2 md:p-[10px] rounded-[38px] bg-[#1A1A1A] border border-[#262626] flex items-center justify-center relative">
        <img src={Heroavatar1} alt="Avatar" className="size-10 md:size-16 rounded-full absolute left-[8px] md:left-[10px]"/>
    <img src={Heroavatar2} alt="Avatar" className="size-10 md:size-16 rounded-full absolute left-[38px] md:left-[58px]"/>
        <img src={Heroavatar3} alt="Avatar" className="size-10 md:size-16 rounded-full absolute left-[68px] md:left-[106px]"/>
        <img src={Heroavatar4} alt="Avatar" className="size-10 md:size-16 rounded-full absolute left-[98px] md:left-[154px]"/>
    </div>
  )
}

export default HeroAvatar