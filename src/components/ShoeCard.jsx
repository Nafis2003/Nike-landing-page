const ShoeCard = ({img,bigImg,ChangeImg}) => {
  const handleClick=()=>{
    if(bigImg!=img.bigShoe){ChangeImg(img.bigShoe)}
  }

  return (
    <div className={`${bigImg==img.bigShoe?'border-2 border-coral-red':''} rounded-xl flex justify-center w-40 h-40 max-sm:w-20 max-sm:h-20 bg-card bg-contain`}>
      <img src={img.thumbnail} alt="Shoe" onClick={handleClick} width={150}/>
    </div>
  )
}

export default ShoeCard;