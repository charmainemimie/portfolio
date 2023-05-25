
const Carousel = () => {
  return (
    <div>
        
<div id="indicators-carousel" className="relative w-full" data-carousel="static">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div className=" duration-700 ease-in-out" data-carousel-item="active">
            <p className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" >
            Hello and welcome 😃 ! My name is Charmaine, and I am a Graduate Software Engineer. I am
          passionate about technology and its ability to make a positive impact
          on society. I have a Bachelor of Science degree in Information Systems
          and Software Engineering from University of Boumerdes ,Algeria and I
          am about to graduate with a Master of Science degree in Software
          Engineering and Information Processing from the same university.
          I am excited to begin my career in the field.
            </p>
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <p className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" >
            During my studies, I
          gained experience in various programming languages such as Java,
          Python, and JavaScript, and I have worked on projects ranging from
          simple console applications to full-stack web development. I also have
          knowledge in network and computer security. I am a quick learner, an
          analytical thinker, and a problem-solver. I enjoy working
          collaboratively with others to solve complex problems, and I am always
          looking for new challenges to expand my skill set. In my free time, I
          enjoy tinkering with personal programming projects and staying
          up-to-date with the latest industry trends. 
          Thank you for taking the time to learn more about me. Please feel free
          to explore my portfolio to learn more about my experience and skills.
          If you have any questions or would like to connect, please don&apos;t
          hesitate to reach out!   
            </p>
        </div>
        
    </div>
    
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

    </div>
  )
}

export default Carousel;