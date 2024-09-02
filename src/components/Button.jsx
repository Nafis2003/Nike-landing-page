const Button = ({label,iconURL,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center text-lg px-7 py-4 bg-coral-red text-white rounded-full ${fullWidth && 'w-full'}`}>{label} 
    { iconURL && <img src={iconURL} alt="icon" className="ml-2 w-5 h-5 rounded-full"/>}</button>
  )
}

export default Button;