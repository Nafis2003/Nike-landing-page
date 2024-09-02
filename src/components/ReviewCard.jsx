import { star } from "../assets/icons";

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img className="rounded-full object-cover w-[120px] h-[120px]" src={imgURL} alt="customer" />
        <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
        
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} alt="star" width={24} height={24} />
            <p className="text-lg">{rating}</p>
        </div>
        <h3 className="mt-1 text-3xl font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard;