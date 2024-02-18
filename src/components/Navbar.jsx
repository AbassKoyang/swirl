import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-center bg-[#1A1A1A]">
        <div className="w-full max-w-[1900px] flex items-center justify-between py-7 px-5 md:px-10 2xl:px-[162px] bg-[#1A1A1A]">
        <Link className="flex items-center gap-2">
            <img src="../src/assets/swirl-logo.svg" alt="Swirl Logo" className="size-8" />
            <h1 className="font-kumbh text-2xl font-semibold text-white">Swirl</h1>
        </Link>
        <button className='px-4 py-1.5 rounded-3xl text-white bg-[#FFD11A] text-sm md:text-lg font-medium font-inter'>
            Sign in
        </button>
        </div>
    </header>
  )
}

export default Navbar