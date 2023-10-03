import {FaFacebook,FaInstagram,FaLinkedinIn,FaEnvelope,FaTwitter,FaGithub} from "react-icons/fa"

const Footer = () => {
    return (
      <footer className=" bg-gray-900 text-white py-4">
      <div className="flex justify-center gap-8">
              <a title="Github" className="text-3xl  hover:text-blue-400" href="https://github.com/charmainemimie" target="_blank" rel="noreferrer"><FaGithub/></a>
              <a title="Email" className="text-3xl  hover:text-blue-400" href="mailto:charmainemangorima@gmail.com"  rel="noreferrer"><FaEnvelope/></a>
              <a title="LinkedIn" className="text-3xl  hover:text-blue-400" href="https://www.linkedin.com/in/charmaine-simangaliso-m-366770199/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
              <a title="Facebook" className="text-3xl  hover:text-blue-400" href="https://web.facebook.com/charmaine.mangorima.3/" target="_blank" rel="noreferrer"><FaFacebook/></a>
              <a title="Instagram" className="text-3xl  hover:text-blue-400" href="https://www.instagram.com/charmaine_mimie/" target="_blank" rel="noreferrer"><FaInstagram/></a>
              <a title="X / Twitter" className="text-3xl  hover:text-blue-400" href="https://twitter.com/2101msc?t=lEmnGZ-5daSVwJQu1hPN1w&s=09" target="_blank" rel="noreferrer"><FaTwitter/></a>
    </div>
  <div className="text-center mt-4">
  
  <br/>
  <p>&copy; 2023 Developer - <a href="mailto:charmainemangorima@gmail.com" className="hover:underline">C.Mangorima.</a></p>
  </div>
  </footer>)
   
  
  
  
    
  }
  
  export default Footer