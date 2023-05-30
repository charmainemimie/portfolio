import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaPhp
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiOcaml,
  SiMysql,
} from "react-icons/si";

const About = () => (
  <div className="pt-12 border">
    <Header />
    <h1 className="text-2xl decoration-blue-950 font-bold font-mono">
      <marquee> About Charmaine Mangorima</marquee>
    </h1>
    <div className=" pt-4">

    <strong>
        <u><p className="pb-3">Languages and Frameworks</p></u>
    </strong>

    <div className="flex flex-wrap ">
          <p className="flex gap-4  text-2xl">
            <FaJava className="text-2xl" /> Java, &nbsp; 
          </p>
          <p className="flex gap-4  text-2xl">
            &nbsp;<SiCplusplus className="text-2xl" /> C/C++, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<FaPython className="text-2xl" /> Python, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<SiJavascript className="text-2xl" /> JavaScript, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<FaReact className="text-2xl" /> React, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<FaHtml5 className="text-2xl" /> HTML, &nbsp;
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
          &nbsp;<FaCss3 className="text-2xl" /> CSS, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<FaPhp className="text-2xl" /> PHP, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<SiMysql className="text-2xl" /> MySQL, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<SiTailwindcss className="text-2xl" /> TailwindCSS, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<SiOcaml className="text-2xl" /> Ocaml, &nbsp;
          </p>
          <p className="flex gap-4  text-2xl">
          &nbsp;<FaBootstrap className="text-2xl" /> Bootstrap, &nbsp;
          </p>
        </div><br />
      
          <div className="flex lg:w-1/2 justify-start text-left">
          <div className="flex-item">
          Hello and welcome 😃 ! My name is Charmaine, and I am a Graduate Software Engineer. I am
          passionate about technology and its ability to make a positive impact
          on society. I have a Bachelor of Science degree in Information Systems
          and Software Engineering from University of Boumerdes ,Algeria and I
          am about to graduate with a Master of Science degree in Software
          Engineering and Information Processing from the same university.
          I am excited to begin my career in the field.
          </div>
          </div>
   <br />
            <div className="flex justify-end lg:w-1/2 ml-auto text-left pb-12">
          <div className="flex-item">
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
          </div>
           
      </div>
    </div>

    <Footer />
  </div>
);

export default About;
