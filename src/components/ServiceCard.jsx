const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="sm:min-w-[350px] sm:w-[350px] flex-1 w-full px-10 py-16 shadow-2xl rounded-2xl">
        <div className="w-10 h-10 bg-coral-red rounded-full flex justify-center items-center"><img src={imgURL} alt="service" width={24} height={24} /></div>

        <h3 className="mt-5 text-2xl font-bold">{label}</h3>
        <p className="mt-3 text-lg text-slate-gray leading-normal break-words">{subtext}</p>

    </div>
  )
}

export default ServiceCard;