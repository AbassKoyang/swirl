import SignUpButton from "../components/SignUpButton";
import { FcGoogle } from "react-icons/fc";
import { FaFigma, FaGithub } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../config/supabase";
import { useState } from "react";


const FORM_ERROR_MESSAGES = {
  EMAIL_REQUIRED: "Please enter your email address.",
  EMAIL_INVALID: "Please enter a valid email address.",
  PASSWORD_REQUIRED: "Please enter your password.",
  PASSWORD_MIN_LENGTH: "Minimum length of the password should be 8 characters.",
};

const Login = () => {
  const { watch, register, handleSubmit, formState: { errors, isValid } } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const { data: loginResponse, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if(!error){
        navigate('/feed');
        console.log("Login successful:", loginResponse);
      }
      if(error){
        setErrorMessage(error.message || null);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithOAuth = async (provider) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
      });
      if (error) {
        throw error;
      }
      console.log("OAuth login successful:", data);
    } catch (error) {
      console.error("OAuth login error:", error);
    }
  };

  

  return (
    <section className="px-5 py-10 lg:py-20 w-full bg-[#141414] flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl 2xl:text-3xl font-bold font-kumbh text-white">Welcome back!</h1>
      <div className={`w-full max-w-72 2xl:max-w-sm flex-col flex`}>
      <p className="text-sm 2xl:text-[16px] text-[#e9e9ef] font-normal max-w-full  my-5 text-center">Once you sign in, your personal feed will be ready to explore.</p>
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
        <form onSubmit={handleSubmit(onSubmit)}  className="w-full flex flex-col gap-3 items-center">
          <div className="w-full">
          <input 
            type="email" 
            name="email" 
            id="email-id" 
            placeholder="Email Address" 
            className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-3 2xl:p-4 text-sm 2xl:text-[16px] text-white/85 border-0 outline-0 focus-within:outline focus-within:outline-1 focus-within:outline-white/35 overflow-hidden outline-offset-[2px]"
            {...register('email', {
              required: {
                value: true,
                message: FORM_ERROR_MESSAGES.EMAIL_REQUIRED
              },
              pattern:{
                value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                message: FORM_ERROR_MESSAGES.EMAIL_INVALID
              },
            })}
            />
            {errors?.email?.message && <p className="text-xs text-left text-red-600 mt-2">{errors?.email?.message}</p>}
          </div>

          <div className="w-full">
          <input 
            type="password" 
            name="password" 
            id="password-id" 
            placeholder="Password" 
            className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-3 2xl:p-4 text-sm 2xl:text-[16px] text-white/85 border-0 outline-0 focus-within:outline focus-within:outline-1 focus-within:outline-white/35 overflow-hidden outline-offset-[2px]"
            {...register('password', {
              required: {
                value: true,
                message: FORM_ERROR_MESSAGES.PASSWORD_REQUIRED
              },
              minLength:{
                value: 8,
                message: FORM_ERROR_MESSAGES.PASSWORD_MIN_LENGTH
              }
            })}
            />
            {errors?.password?.message && <p className="text-xs text-left text-red-600 mt-2">{errors?.password?.message}</p>}
          </div>

            <button onClick={handleSubmit(onSubmit)} disabled={!isValid} className="w-full flex items-center justify-center gap-3 px-5 py-2.5 disabled:bg-white/35  disabled:text-gray-400 disabled:cursor-not-allowed bg-white hover:bg-[#FFD11A] rounded-sm text-black hover:text-white text-sm font-bold transition-all duration-200 ease-in-out">
                <p>Sign In</p>
                {isLoading && <ImSpinner6 className="size-5 animate-spin" />}
            </button>
            <p className="text-xs text-left text-red-600 mt-2">{errorMessage}</p>
        </form>
        <div className="w-full h-[1px] bg-white/35 mt-9 mb-3" />
        <p className="text-sm 2xl:text-sm text-[#98989A] text-center">Don't have an account? <Link to='/onboarding/signup' className="font-medium underline hover:text-[#FFD11A]">Sign Up</Link></p>
      </div>
    </section>
  )
}

export default Login;
