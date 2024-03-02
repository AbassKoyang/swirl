import SignUpButton from "../components/SignUpButton";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord, FaGithub } from "react-icons/fa";


const SignUp = () => {
  return (
    <secion className="px-5 w-full bg-[#141414] flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold font-kumbh text-white">Sign Up</h1>
      <p className="text-lg text-[#98989A] font-normal max-w-md mt-3 text-center">Once you sign up, your personal feed will be ready to explore.</p>
      <div className="w-full max-w-72 flex flex-col mt-5">
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
        <form action="">
          <input type="email" name="email" id="" placeholder="Email Address" className="w-full bg-black/95 rounded-sm p-2 text-sm" />
        </form>
      </div>
    </secion>
  )
}

export default SignUp