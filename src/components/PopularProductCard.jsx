import { star } from "../assets/icons";
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div>
      <div>
      <img src={imgURL} alt="shoe"/>
      <p className="my-3 flex justify-start items-center gap-2 text-lg text-slate-gray"><img className=" inline" src={star} alt="star" width={24} height={24}/> 4.5</p>
      </div>
      <p className="text-xl font-bold">{name}</p>
      <p className="my-2 text-coral-red text-xl font-bold">{price}</p>
   </div>
  )
}

export default PopularProductCard;