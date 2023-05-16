import Footer from "../components/Footer";
import {FaBriefcase,FaTasks,FaKey} from "react-icons/fa"
import{FiSmartphone} from "react-icons/fi"
const Services = () => {
  return (
    <>
    

      <br /><br /><h2 className="center text-2xl decoration-blue-950 font-bold font-mono">Here are some of the services that I offer...</h2><br />
    <div className="border border-radius-12 flex flex-wrap justify-between pb-3">
     
            
          <div className="p-10 gap-5 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 border">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-600 ml-28">
                    <FaTasks/>
                </div>
            <h1 className="text-2xl text-blue-600">WEB DEVELOPMENT</h1>
            <div className="flex items-center justify-center mt-2">
                <p>
                    My web development services focus on building custom web
                    applications that are secure, scalable, and user-friendly. I am
                    committed to using the latest technologies and best practices to
                    develop high-quality web applications that exceed my clients&apos;
                    expectations.
                </p>
            </div>
          </div>

          <div className="p-10 gap-5 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 border">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-600 ml-28">
                    <FaBriefcase/>
                </div>
            <h1 className="text-2xl text-blue-600">WEB DESIGN</h1>
            <div className="flex items-center justify-center mt-2">
            <p>
                I have expertise in web design, I specialize in creating visually
                appealing and user-friendly websites. My services include designing
                the layout and interface of web pages, selecting and customizing the
                appropriate color schemes, fonts, and graphics, and ensuring the
                website&apos;s overall functionality.
        </p>
            </div>
          </div>

          <div className="p-10 gap-5 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 border">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-600 ml-28">
                    <FiSmartphone/>
                </div>
            <h1 className="text-2xl text-blue-600">MOBILE APP DEVELOPMENT</h1>
            <div className="flex items-center justify-center mt-2">
                <p>
                    I am currently working on my first android mobile application. My goal
                    is to create engaging and user-friendly mobile applications for both
                    iOS and Android platforms. I want to design the app&apos;s interface
                    and user experience, developing the app&apos;s functionality, and
                    ensuring compatibility across multiple devices.
                </p>
            </div>
          </div>

          <div className="p-10 gap-5 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 border">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-600 ml-28">
                    <FaKey/>
                </div>
            <h1 className="text-2xl text-blue-600">NETWORK AND COMPUTER SECURITY</h1>
            <div className="flex items-center justify-center mt-2">
                <p>
                    I have knowledge in setting up local networks as well as securing them
                    using firewalls such as Netfilter commands in Linux.
                </p>
            </div>
          </div>

    
       
      </div>

      <Footer />
    </>
  );
};

export default Services;
