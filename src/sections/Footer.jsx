import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/"><img src={footerLogo} alt="Nike" width={150} height={46} /></a>
          <p className="mt-6 sm:max-w-sm text-lg text-white">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-6">
            {socialMedia.map(img=>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={img.src} alt={img.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap text-white">
          {
            footerLinks.map(section=>(
              <div key={section.title}>
                <h4 className="text-2xl mb-6 font-medium">{section.title}</h4>
                <ul>
                  {section.links.map(link=>(<li key={link.name}><a href={link.link}>{link.name}</a></li>))}
                </ul>
              </div>
            ))
          }

        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex justify-start items-center gap-2">
          <img className="rounded-full" src={copyrightSign} alt="copyright" width={20} height={20}/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>

      </div>

    </footer>
  )
}

export default Footer;