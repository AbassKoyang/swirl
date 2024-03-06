import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <header className="w-full flex items-center justify-center bg-[#1A1A1A] fixed top-0 left-0">
        <div className="w-full max-w-[1900px] flex items-center justify-between py-7 px-5 md:px-10 2xl:px-[162px] bg-[#1A1A1A]">
        <Link to='/' className="flex items-center gap-2">
            <img src="../src/assets/swirl-logo.svg" alt="Swirl Logo" className="size-8" />
            <h1 className="font-kumbh text-2xl font-semibold text-white">Swirl</h1>
        </Link>
        <Link to='onboarding/login' className={`px-4 py-1.5 rounded-3xl text-white bg-[#FFD11A] text-xs md:text-sm font-medium lg:font-semibold font-inter ${pathname === '/onboarding/signup' || pathname === 'onboarding/login' ? 'hidden' : 'block'}`}>
            Sign in
        </Link>
        </div>
    </header>
  )
}

export default Navbar
