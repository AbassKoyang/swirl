import SignUpButton from "../components/SignUpButton";
import { FcGoogle } from "react-icons/fc";
import { FaChevronRight, FaDiscord, FaGithub } from "react-icons/fa";
import { LuCheck, LuMail } from "react-icons/lu";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [steps, setSteps] = useState(0);
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


  return (
    <secion className="px-5 w-full bg-[#141414] flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold font-kumbh text-white">Sign Up</h1>
      <div className={`w-full max-w-72 flex-col ${steps === 0 ? 'flex' : 'hidden'}`}>
      <p className="text-sm text-[#e9e9ef] font-normal max-w-sm my-5 text-center">Once you sign up, your personal feed will be ready to explore.</p>
        <div className="w-full flex flex-col gap-2">
        <SignUpButton text='Google' icon={<FcGoogle className="size-6" />} />
        <SignUpButton text='Github' icon={<FaGithub className="size-6" />} />
        <SignUpButton text='Discord' icon={<FaDiscord className="size-6" />} />
        </div>
        <div className="w-full flex items-center justify-between my-4">
          <div className="w-[40%] h-[1px] bg-white/35"></div>
          <span className="font-medium text-lg text-white/35">or</span>
          <div className="w-[40%] h-[1px] bg-white/35"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}  className="w-full flex items-center justify-between bg-black/95 rounded-sm p-2 focus-within:outline focus-within:outline-1 focus-within:outline-white/35 overflow-hidden outline-offset-[2px]">
          <input 
            type="email" 
            name="email" 
            id="email-id" 
            placeholder="Email Address" 
            className="w-full bg-black/95 rounded-sm p-1.5 text-sm text-white/85 border-0 outline-0 mr-2"
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
            className="disabled:bg-white/70 p-1.5 rounded-sm  bg-[#FFD11A] group" 
            onClick={handleSubmit(onSubmit)}><FaChevronRight className="size-4 group-disabled:text-gray-500 text-white"/>
          </button>
        </form>
        {errors?.email?.message && <p className="text-xs text-red-600 mt-2">{errors.email.message}</p>}
        <p className="text-xs text-[#98989A] text-center mt-2">By signing up I accept the <Link to='/' className="font-medium underline hover:text-[#FFD11A]">Terms of Service</Link> and the <Link to='/' className="font-medium underline hover:text-[#FFD11A]">Privacy Policy</Link>.</p>
        <div className="w-full h-[1px] bg-white/35 mt-9 mb-3" />
        <p className="text-sm text-[#98989A] text-center">Already using swirl? <Link className="font-medium underline hover:text-[#FFD11A]">Log in</Link></p>
      </div>
      <div className={`w-full max-w-xs flex-col mt-5 ${steps === 1 ? 'flex' : 'hidden'}`}>
        <form action="">
          <div className="w-full flex items-center p-2 bg-black/95 rounded-sm focus-within:outline focus-within:outline-1 focus-within:outline-white/35">
            <LuMail className="text-white size-7"/>
            <input 
            type="email"
            name="email-filled"
            placeholder="Email Address" 
            value={user.email}
            readOnly
            className="w-full bg-black/95 rounded-sm p-1.5 text-sm text-white/90 border-0 outline-0 mx-2"
             />
             <LuCheck className="text-green-500 size-5" />
          </div>
        </form>
        <button onClick={() => setSteps((prev) => prev - 1)}>prev</button>
      </div>
    </secion>
  )
}

export default SignUp