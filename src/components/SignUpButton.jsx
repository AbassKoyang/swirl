
const SignUpButton = ({text, icon}) => {
  return (
    <button className="flex items-center gap-2 px-3 py-2 bg-[#FFD11A] rounded-sm text-white">
        <p>{text}</p>
        {icon}
    </button>
  )
}

export default SignUpButton