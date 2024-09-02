import { shoes, statistics } from "../constants";
import { Button,ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { useState } from "react";

const Hero = () => {
  const[bigImg,setBigImg]=useState(bigShoe1);

  return (
    <section className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl">Our Summer Collection</p>
        <h1 className=" mt-10 text-8xl max-sm:text-[72px] max-sm:leading-1 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="text-lg text-slate-gray leading-8 max-w-sm mt-6 mb-14">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight}/>

        <div className="flex gap-16 mt-20">
          {statistics.map(({value,label})=>(
            <div key={label}>
              <p className="text-4xl max-sm:text-2xl font-bold">{value}</p>
              <p className="leading-7 text-slate-gray">{label}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigImg} alt="shoe" width={610} height={502} />

      <div className="flex gap-5 absolute -bottom-12">
        {
          shoes.map((shoe)=><ShoeCard key={shoe.thumbnail} img={shoe} bigImg={bigImg} ChangeImg={setBigImg} />)
        }
        
      </div>
      </div>
    </section>
  );
};

export default Hero;
