import {Button} from '../components'
import { shoe8 } from '../assets/images';
const SuperQuality = () => {
  return (
    <div className="flex max-lg:flex-col justify-center items-center gap-16">
      <div>
        <h2 className="text-4xl font-bold">We Provide You <span className="text-coral-red">Super</span> <br /> <span className="text-coral-red">Quality</span> Shoes</h2>
        <p className="text-slate-gray leading-normal font-lg lg:max-w-lg mt-5 mb-11">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        <br /><br />
        Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <Button label="Shop Now"/>
      </div>
      <div><img src={shoe8} alt="shoe" width={570} height={522} /></div>
    </div>
  )
}

export default SuperQuality;