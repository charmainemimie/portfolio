import Footer from "../components/Footer";
import { FaBriefcase, FaTasks, FaKey } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
const Services = () => {
  return (


    <>

    <div className="pt-6 text-2xl flex items-center justify-center ">
      <h1>Here are some of the services that I offer</h1>
    </div>
      <div className="px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div>
          <div className="max-w-full px-6 pt-6 pb-[49px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center text-blue-700 text-3xl pb-2">
              <FaTasks />
            </div>

            <h5 className="flex items-center justify-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              WEB DEVELOPMENT
            </h5>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              My web development services focus on building custom web
              applications that are secure, scalable, and user-friendly. I am
              committed to using the latest technologies and best practices to
              develop high-quality web applications that exceed my clients&apos;
              expectations.
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-full px-6 pt-6 pb-[49px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center text-blue-700 text-3xl pb-2">
              <FaBriefcase />
            </div>

            <h5 className="flex items-center justify-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              WEB DESIGN
            </h5>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              I have expertise in web design, I specialize in creating visually
              appealing and user-friendly websites. My services include
              designing the layout and interface of web pages, selecting and
              customizing the appropriate color schemes, fonts, and graphics,
              and ensuring the website&apos;s overall functionality.
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center text-blue-700 text-3xl pb-2">
              <FiSmartphone />
            </div>

            <h5 className="flex items-center justify-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              MOBILE APP DEVELOPMENT
            </h5>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              I am currently working on my first android mobile application. My
              goal is to create engaging and user-friendly mobile applications
              for both iOS and Android platforms. I want to design the
              app&apos;s interface and user experience, developing the
              app&apos;s functionality, and ensuring compatibility across
              multiple devices.
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-full px-6 pt-6 pb-[96px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center text-blue-700 text-3xl pb-2">
              <FaKey />
            </div>

            <h5 className="flex items-center justify-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              NETWORK AND COMPUTER SECURITY
            </h5>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              I have knowledge in setting up local networks as well as securing
              them using firewalls such as Netfilter commands in Linux.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
