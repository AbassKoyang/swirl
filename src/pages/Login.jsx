import SignUpButton from "../components/SignUpButton";
import { FcGoogle } from "react-icons/fc";
import { FaFigma, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import supabase from "../../config/supabase";
import { useState } from "react";


const Login = () => {
  const { watch, register, handleSubmit, formState: {errors, isValid}} = useForm();


  const onSubmit = (data) => {
    console.log(data);
    signInWithEmail(data);
  }


  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
       provider: 'google',
     })
     console.log('clicked', data)
    } catch (error) {
     console.log(error)
    }
   }

  const signInWithGithub = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      })
     console.log('clicked github', data)
    } catch (error) {
     console.log(error)
    }
   }

  const signInWithFigma = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'figma',
      })
     console.log('clicked figma', data)
    } catch (error) {
     console.log(error)
    }
   }

  const signInWithEmail = async (loginDetails) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginDetails.email,
        password: loginDetails.password,
      })
     if(data){
        return (data);
     } else throw new Error(error.message)
    } catch (error) {
     console.log(error)
    }
   }

  

  return (
    <section className="px-5 py-10 lg:py-20 w-full bg-[#141414] flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl 2xl:text-3xl font-bold font-kumbh text-white">Welcome back!</h1>
      <div className={`w-full max-w-72 2xl:max-w-sm flex-col flex`}>
      <p className="text-sm 2xl:text-[16px] text-[#e9e9ef] font-normal max-w-full  my-5 text-center">Once you sign in, your personal feed will be ready to explore.</p>
        <div className="w-full flex flex-col gap-2">
        <SignUpButton text='Google' icon={<FcGoogle className="size-6"/>}  signin={signInWithGoogle} />
        <SignUpButton text='Github' icon={<FaGithub className="size-6" />} signin={signInWithGithub}/>
        <SignUpButton text='Figma' icon={<FaFigma className="size-6" />} signin={signInWithFigma}/>
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
                message: 'Please enter your email address.'
              },
              pattern:{
                value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                message: "Please enter a valid email address."
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
                message: 'Please enter your password.'
              },
              minLength:{
                value: 8,
                message:"Minimum length of the password should be 8 characters."
              }
            })}
            />
            {errors?.password?.message && <p className="text-xs text-left text-red-600 mt-2">{errors?.password?.message}</p>}
          </div>

            <button onClick={handleSubmit(onSubmit)} disabled={!isValid} className="w-full flex items-center justify-center px-5 py-2.5 disabled:bg-white/35  disabled:text-gray-400 disabled:cursor-not-allowed bg-white hover:bg-[#FFD11A] rounded-sm text-black hover:text-white text-sm font-bold transition-all duration-200 ease-in-out">
                <p>Sign In</p>
            </button>
        </form>
        <div className="w-full h-[1px] bg-white/35 mt-9 mb-3" />
        <p className="text-sm 2xl:text-sm text-[#98989A] text-center">Don't have an account? <Link to='/onboarding/signup' className="font-medium underline hover:text-[#FFD11A]">Sign Up</Link></p>
      </div>
    </section>
  )
}

export default Login;
