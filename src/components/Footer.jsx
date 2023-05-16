import {FaFacebook,FaInstagram,FaLinkedinIn,FaEnvelope,FaTwitter} from "react-icons/fa"

const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] text-white py-4">
      <div className="flex justify-center gap-8">
  
              <a title="Email" className="text-3xl  hover:text-blue-400" href="mailto:charmainemangorima@gmail.com"  rel="noreferrer"><FaEnvelope/></a>
              <a title="LinkedIn" className="text-3xl  hover:text-blue-400" href="https://www.linkedin.com/in/charmaine-simangaliso-m-366770199/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
              <a title="Facebook" className="text-3xl  hover:text-blue-400" href="https://web.facebook.com/charmaine.mangorima.3/" target="_blank" rel="noreferrer"><FaFacebook/></a>
              <a title="Instagram" className="text-3xl  hover:text-blue-400" href="https://www.instagram.com/charmaine_mimie/" target="_blank" rel="noreferrer"><FaInstagram/></a>
              <a title="Twitter" className="text-3xl  hover:text-blue-400" href="https://twitter.com/2101msc?t=lEmnGZ-5daSVwJQu1hPN1w&s=09" target="_blank" rel="noreferrer"><FaTwitter/></a>
    </div>
  <div className="text-center mt-4">
  
  <br/>
  <p>&copy; 2023 Developer - C.Mangorima.</p>
  </div>
  </footer>)
   
  
  
  
    
  }
  
  export default Footer