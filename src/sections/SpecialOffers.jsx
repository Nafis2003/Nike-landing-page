import { Button } from "../components";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
const SpecialOffers = () => {
  return (
    <div className="max-container flex flex-col xl:flex-row-reverse justify-between items-center gap-10">
      <div>
        <h2 className="text-4xl font-bold"><span className="text-coral-red">Special</span> Offer</h2>
        <p className="text-slate-gray leading-normal font-lg lg:max-w-lg mt-5">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        <br /><br />
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex flex-wrap mt-11 gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <button className="text-slate-gray border-[1px] border-slate-gray flex justify-center items-center text-lg px-7 py-4 bg-white rounded-full">Learn more</button>
        </div>
      </div>

      <div className="flex-1">
      <img className=" object-contain w-full" src={offer} alt="offer" width={773} height={687} />

      </div>
    </div>
  )
}

export default SpecialOffers;