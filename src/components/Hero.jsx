import { Link } from "react-router-dom";
import Mimie from '../assets/mimie.jpg'
import cv from '../assets/CVMangorimaCharmaine.pdf'
const Hero = () => {
  return (

    <section className="bg-gray-800">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Charmaine S Mangorima</h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Graduate Software Engineer</p>
            
            <Link to='/about' className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Learn more about me
            </Link> <br /><br />

            <a target="_blank" href={cv} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" rel="noreferrer">
                Download My Resume
            </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex pr-4">
            <img src={Mimie} alt="mimie" />
            {/* <img src="https://c0.wallpaperflare.com/preview/75/28/918/macbook-minimal-dark-wallpaper.jpg" alt="mockup"/> */}
        </div>                
    </div>
</section>

  )
}

export default Hero
