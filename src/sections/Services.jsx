import { ServiceCard } from "../components";
import { services } from "../constants";
const Services = () => {
  return (
    <div className="max-container flex flex-wrap justify-center gap-10">
      {
        services.map(service=><ServiceCard key={service.label} {...service}/>)
      }

    </div>
  )
}

export default Services;