import SignUpButton from "../components/SignUpButton";
import { FcGoogle } from "react-icons/fc";
import { FaChevronRight, FaDiscord, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";


const SignUp = () => {
  const [steps, setSteps] = useState(0);
  const [email, setEmail] = useState('')
  const  [method, setMethod] = useState("");
  const { watch, register, handleSubmit, formState} = useForm();
  const {errors, isValid} = formState;


  const handleEmailButtonSubmit = (e) => {
    e.preventDefault();
    handleSubmit(onsubmit)("email");
    setSteps((prev) => prev + 1);

  }


  return (
    <secion className="px-5 w-full bg-[#141414] flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold font-kumbh text-white">Sign Up</h1>
      <p className="text-[16px] text-[#98989A] font-normal max-w-sm mt-3 text-center">Once you sign up, your personal feed will be ready to explore.</p>
      <div className={`w-full max-w-72 flex-col mt-5 ${steps === 0 ? 'flex' : 'hidden'}`}>
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
        <form onSubmit={handleEmailButtonSubmit} className="w-full flex items-center justify-between bg-black/95 rounded-sm p-2 focus-within:outline focus-within:outline-1 focus-within:outline-white/35 overflow-hidden outline-offset-[2px]">
          <input 
            type="email" 
            name="email" 
            id="" 
            placeholder="Email Address" 
            className="w-full bg-black/95 rounded-sm p-1.5 text-sm text-white/85 border-0 outline-0"
            onChange={(e) => setEmail(e.target.value)}
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
            className="disabled:bg-white/70 p-1.5 rounded-sm  bg-white" 
            onClick={handleEmailButtonSubmit}><FaChevronRight className="size-4 group-disabled:text-gray-500 text-gray-600"/>
          </button>
        </form>
        {errors?.email?.message && <p className="text-xs text-red-600 mt-2">{errors.email.message}</p>}
      </div>
      <div className={`w-full ${steps === 1 ? 'flex' : 'hidden'}`}>

        <button onClick={() => setSteps((prev) => prev - 1)}>prev</button>
      </div>
    </secion>
  )
}

export default SignUp