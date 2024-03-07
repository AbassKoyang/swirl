import { LuCheck, LuEye, LuEyeOff, LuLock, LuMail, LuUser } from "react-icons/lu";
import { HiAtSymbol } from "react-icons/hi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../config/supabase";
import { ImSpinner6 } from "react-icons/im";

const FormStepTwo = ({steps, user, setUser}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors, isValid}} = useForm();

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }
    const onSubmit = async (data)=> {
      setUser(data);  
      console.log(data);
      try {
        setIsLoading(true);
        const { data: SignUpResponse, error } = await supabase.auth.signUp({
          email: data.email,
                password: data.password,
                options: {
                  emailRedirectTo: 'http://localhost:5173/feed',
                  data:{
                            "screen_name": data.fullname,
                            "username": data.username,
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
                          }},
        });
        if(!error){
          console.log("SignUp successful:", SignUpResponse);
        }
        if(error){
          setErrorMessage(error.message || null);
        }
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <div className={`w-full max-w-xs 2xl:max-w-sm flex-col mt-5 ${steps === 1 ? 'flex' : 'hidden'}`}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex items-center p-2 bg-black/95 rounded-sm 2xl:rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-[#2cdce6] my-4">
        <LuMail className="text-white size-6"/>
        <input 
        type="email"
        name="email"
        placeholder="Email Address" 
        value={user.email}
        readOnly
        className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-1.5 2xl:p-2 text-sm 2xl:text-[16px] text-white/90 border-0 outline-0 mx-2"
        {...register('email',
        )}
         />
         <LuCheck className="text-green-500 size-5" />
      </div>
      <div className="w-full flex items-center p-2 bg-black/95 rounded-sm 2xl:rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-[#2cdce6] my-4">
        <LuLock className="text-white size-6"/>
        <input 
        type={isPasswordVisible ? 'text' : 'password'}
        name="password"
        placeholder="Enter password" 
        className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-1.5 2xl:p-2 text-sm 2xl:text-[16px] text-white/90 border-0 outline-0 mx-2"
        {...register('password', 
        {
          required: {
            value: true,
            message: "Password is required."
          },
          minLength:{
            value: 8,
            message:"Minimum length of the password should be 8 characters."
          }
        }
        )}
         />
         <button type="button" onClick={togglePasswordVisibility} className="p-0 bg-transparent border-0 outline-0">{isPasswordVisible ? (<LuEyeOff className="size-4 text-white" />) : (<LuEye className="size-4 text-white" />)}</button>
      </div>
      {errors?.password && <p className="text-xs text-red-600 mt-2">{errors.password.message}</p>}
      <div className="w-full flex items-center p-2 bg-black/95 rounded-sm 2xl:rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-white/75 my-4">
        <LuUser className="text-white size-6"/>
        <input 
        type="text"
        name="fullname"
        placeholder="Enter fullname" 
        className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-1.5 2xl:p-2 text-sm 2xl:text-[16px] text-white/90 border-0 outline-0 mx-2"
         {...register('fullname', {
          required: {
            value: true,
            message: "Fullname is required."
          },
        }
        )}
         />
      </div>
      {errors?.fullname?.message && <p className="text-xs text-red-600 mt-2">{errors.fullname.message}</p>}
      <div className="w-full flex items-center p-2 bg-black/95 rounded-sm 2xl:rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-white/75 my-4">
        <HiAtSymbol  className="text-white size-6"/>
        <input 
        type="text"
        name="username"
        placeholder="Enter username" 
        className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-1.5 2xl:p-2 text-sm 2xl:text-[16px] text-white/90 border-0 outline-0 mx-2"
         {...register('username', 
        {
          required: {
            value: true,
            message: "Username is required."
          },
        }
        )}
         />
      </div>
      {errors?.username?.message && <p className="text-xs text-red-600 mt-2">{errors.username.message}</p>}
      <button onClick={handleSubmit(onSubmit)} disabled={!isValid} className="w-full flex items-center justify-center gap-3 px-5 py-2.5 disabled:bg-white/35  disabled:text-gray-400 disabled:cursor-not-allowed bg-white hover:bg-[#FFD11A] rounded-sm text-black hover:text-white text-sm font-bold transition-all duration-200 ease-in-out">
                <p>Sign In</p>
                {isLoading && <ImSpinner6 className="size-5 animate-spin" />}
            </button>
            <p className="text-xs text-left text-red-600 mt-2">{errorMessage}</p>
    </form>
  </div>
  )
}

export default FormStepTwo