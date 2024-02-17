import Hero from "../components/Hero"
import HeroFeaturesGrid from "../components/HeroFeaturesGrid"

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-[#141414] max-w-[1500px]">
      <Hero /> 
      <HeroFeaturesGrid />
    </section>
  )
}

export default Home