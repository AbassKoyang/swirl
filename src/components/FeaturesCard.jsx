
const FeaturesCard = ({feature, description}) => {
  return (
    <div className="col-span-1 bg-[#1A1A1A] border border-[#262626] 2xl:rounded-xl p-6 lg:p-[30px] 2xl:p-10">
        <h4 className="font-medium font-inter text-white text-lg lg:text-xl 2xl:text-2xl">{feature}</h4>
        <p className="font-normal font-inter text-sm lg:text-[16px] 2xl:text-lg text-[#98989A] 2xl:mt-4">{description}</p>
    </div>
  )
}

export default FeaturesCard