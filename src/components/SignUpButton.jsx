
const SignUpButton = ({text, icon, signin}) => {

  return (
    <button onClick={signin} className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-[#FFD11A] rounded-sm text-black hover:text-white text-sm font-bold transition-all duration-200 ease-in-out">
        <p>{text}</p>
        {icon}
    </button>
  )
}

export default SignUpButton