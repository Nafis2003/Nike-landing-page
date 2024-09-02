import { Button } from "../components";

const Subscribe = () => {
  return (
    <div className="max-container flex justify-between items-center max-md:flex-col gap-10">
      <h3 className="text-4xl font-bold leading-[68px] lg:max-w-lg">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col sm:border sm:border-slate-gray gap-5 p-2.5 rounded-full">
        <input name="email" autoComplete="true" className=" input" type="text" placeholder="subscribe@nike.com"/>
        <div className="flex items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth={true}/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;