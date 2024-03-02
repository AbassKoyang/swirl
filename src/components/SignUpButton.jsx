
const SignUpButton = ({text, icon}) => {
  return (
    <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-white rounded-sm text-black text-sm font-bold">
        <p>{text}</p>
        {icon}
    </button>
  )
}

export default SignUpButton