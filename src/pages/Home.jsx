import Hero from "../components/Hero"
import HeroFeaturesGrid from "../components/HeroFeaturesGrid"
import SubheadingCon from "../components/SubheadingCon"

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-[#141414] max-w-[1500px]">
      <Hero /> 
      <HeroFeaturesGrid />
      <SubheadingCon heading="FutureTech Features" text='Unlock the Power of' styles='hidden' />
    </section>
  )
}

export default Home