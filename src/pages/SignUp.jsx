import SignUpButton from "../components/SignUpButton";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord, FaGithub } from "react-icons/fa";


const SignUp = () => {
  return (
    <secion className="px-5 w-full bg-[#141414] flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold font-kumbh text-white">Sign Up</h1>
      <p className="text-lg text-[#98989A] font-normal max-w-md mt-3 text-center">Once you sign up, your personal feed will be ready to explore.</p>
      <div className="w-full max-w-72 flex flex-col gap-2 mt-5">
        <SignUpButton text='Google' icon={<FcGoogle className="size-6" />} />
        <SignUpButton text='Github' icon={<FaGithub className="size-6" />} />
        <SignUpButton text='Discord' icon={<FaDiscord className="size-6" />} />
      </div>
    </secion>
  )
}

export default SignUp