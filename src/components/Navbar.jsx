import { Link, useLocation, useNavigate } from "react-router-dom"
import supabase from "../../config/supabase";
import { useEffect, useState } from "react";
import Logo from '../assets/swirl-logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [isUserSignedInLocal, setIsUserSignedInLocal] = useState(false);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const session = await supabase.auth.getSession();
        setIsUserSignedInLocal(!!session.user);
      } catch (error) {
        console.error('Error checking user session:', error);
        setIsUserSignedInLocal(false);
      }
    };

    checkUserSession();
    console.log(isUserSignedInLocal);
  }, []);

  const signOutUser = async () => {
      const { error: signOutError } = await supabase.auth.signOut();
      if(signOutError){ 
        console.log(signOutError)
        throw signOutError
      } else {
        navigate('/onboarding/login')
      }
  };

  return (
    <header className="w-full flex items-center justify-center bg-[#1A1A1A] fixed top-0 left-0 z-[1000]">
        <div className="w-full max-w-[1900px] flex items-center justify-between py-7 px-5 md:px-10 2xl:px-[162px] bg-[#1A1A1A]">
        <Link to='/' className="flex items-center gap-2">
            <img src={Logo} alt="Swirl Logo" className="size-8" />
            <h1 className="font-kumbh text-2xl font-semibold text-white">Swirl</h1>
        </Link>
        {isUserSignedInLocal ? (
          <button onClick={signOutUser} className={`px-4 py-1.5 rounded-3xl text-white bg-[#FFD11A] text-xs md:text-sm font-medium lg:font-semibold font-inter ${pathname === '/onboarding/signup' || pathname === 'onboarding/login' ? 'hidden' : 'block'}`}>
              Sign out
          </button>) : (
          <Link to='onboarding/login' className={`px-4 py-1.5 rounded-3xl text-white bg-[#FFD11A] text-xs md:text-sm font-medium lg:font-semibold font-inter ${pathname === '/onboarding/signup' || pathname === 'onboarding/login' ? 'hidden' : 'block'}`}>
          Sign in
          </Link>
        )}
        </div>
    </header>
  )
}

export default Navbar
