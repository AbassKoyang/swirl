import SignUpButton from "../components/SignUpButton";
import { FcGoogle } from "react-icons/fc";
import { FaChevronRight, FaFigma, FaGithub } from "react-icons/fa";
import { LuCheck, LuMail } from "react-icons/lu";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormStepTwo from "../components/FormStepTwo";
import supabase from "../../config/supabase";


const SignUp = () => {
  const [steps, setSteps] = useState(0);
  const [signupError, setSignupError] = useState(null)
  const [user, setUser] = useState(
    {email: '',
    password: '',
    fullname: '',
    username: '',
});
  const { watch, register, handleSubmit, formState: {errors, isValid}} = useForm();


  const onSubmit = (data) => {
    console.log(data);
    setUser((prev)=>({...prev, ...data}));
    setSteps((prev) => prev + 1);
  }


  const signInWithOAuth = async (provider) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        data:{
          "screen_name": "",
          "username": "",
          "can_dm": null,
          "can_media_tag": null,
          "bio": "",
          "contact": "",
          "website": "",
          "socials": [
            {
              "name": "", 
              "link":"",
              "icon":"",
          }
          ],
          "favourites_count": 0,
          "followers_count": 0,
          "friends_count": 0,
          "bookmarks_count": 0,
          "posts_count": 0,
          "comments_count": 0,
          "location": "",
          "media_count": 0,
          "profile_banner_url": "",
          "profile_image_url": "",
          "company": "",
          "job_title": ""
        }
      });
      if (error) {
        setSignupError(error.message);
        throw error;
      }else{
        console.log("OAuth login successful:", data);
      }
    } catch (error) {
      console.error("OAuth login error:", error);
    }
  };

  

  return (
    <section className="px-5 w-full bg-[#141414] flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl 2xl:text-3xl font-bold font-kumbh text-white">Sign Up</h1>
      <div className={`w-full max-w-72 2xl:max-w-sm flex-col ${steps === 0 ? 'flex' : 'hidden'}`}>
      <p className="text-sm 2xl:text-[16px] text-[#e9e9ef] font-normal max-w-full  my-5 text-center">Once you sign up, your personal feed will be ready to explore.</p>
        <div className="w-full flex flex-col gap-2">
        <SignUpButton text='Google' icon={<FcGoogle className="size-6"/>}  signin={() => signInWithOAuth('google')} />
        <SignUpButton text='Github' icon={<FaGithub className="size-6" />} signin={() => signInWithOAuth('github')}/>
        <SignUpButton text='Figma' icon={<FaFigma className="size-6" />} signin={() => signInWithOAuth('figma')}/>
        </div>
        <div className="w-full flex items-center justify-between my-4">
          <div className="w-[40%] h-[1px] bg-white/35"></div>
          <span className="font-medium text-lg text-white/35">or</span>
          <div className="w-[40%] h-[1px] bg-white/35"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}  className="w-full flex items-center justify-between bg-black/95 rounded-sm 2xl:rounded-md p-2 focus-within:outline focus-within:outline-1 focus-within:outline-white/35 overflow-hidden outline-offset-[2px]">
          <input 
            type="email" 
            name="email" 
            id="email-id" 
            placeholder="Email Address" 
            className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-1.5 2xl:p-2 text-sm 2xl:text-[16px] text-white/85 border-0 outline-0 mr-2"
            {...register('email', {
              required: {
                value: true,
                message: 'Please enter your email address.'
              },
              pattern:{
                value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                message: "Please enter a valid email address."
              },
            })}
            />
          <button 
            disabled={!isValid} 
            type="button" 
            className="disabled:bg-white/70 p-1.5 2xl:p-2 rounded-sm 2xl:rounded-md  bg-[#FFD11A] group" 
            onClick={handleSubmit(onSubmit)}><FaChevronRight className="size-4 group-disabled:text-gray-500 text-white"/>
          </button>
        </form>
        {errors?.email?.message && <p className="text-xs text-red-600 mt-2">{errors.email.message}</p>}
        {signupError && <p className="text-xs text-red-600 mt-2">{signupError}</p>}
        <p className="text-xs 2xl:text-sm text-[#98989A] text-center mt-2">By signing up I accept the <Link to='/' className="font-medium underline hover:text-[#FFD11A]">Terms of Service</Link> and the <Link to='/' className="font-medium underline hover:text-[#FFD11A]">Privacy Policy</Link>.</p>
        <div className="w-full h-[1px] bg-white/35 mt-9 mb-3" />
        <p className="text-sm 2xl:text-sm text-[#98989A] text-center">Already using swirl? <Link to='/onboarding/login' className="font-medium underline hover:text-[#FFD11A]">Log in</Link></p>
      </div>

      {steps > 0 && <FormStepTwo user={user} steps={steps} setUser={setUser} />}
    </section>
  )
}

export default SignUp