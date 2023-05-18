import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiOcaml,
} from "react-icons/si";

const About = () => (
  <div className="pt-12 border bg-blue-50">
    <Header />
    <h1 className="text-2xl decoration-blue-950 font-bold font-mono">
      <marquee> About Charmaine Mangorima</marquee>
    </h1>
    <div className=" pt-4">
      
          <div className="flex lg:w-1/2 justify-start text-left ">
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
            <div className="flex justify-end lg:w-1/2 ml-auto text-left ">
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

      <div className="flex flex-wrap gap-5 border mt-4">
        <div className=" ">
          <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaVZbmZd_eSL6zHQVu0KN_iCuapLo-0sLQqhIGHUNGNGNoUwPumStr67DPjzjNE2vaOA83Abwf3PRBUTx6Am-7sDsFP17vCCdJYmHnLOHXu4GA4gmAAmro0SJboxwlSooRIbW3lLzBAMMu6LiT_DMn-jy5NAfKvAofw6Y4wifHhbSbbdTVD76nvJGaKpCUw82X4cuOgUIENhPexQs_RbJyM8QFK_7UTkoBKrzxHZ4t8XFihVJ3gVOa3LMj_JLsIjTiPa5fEJiG0JmF3G2m1jO-qzgDw57RUkWc_ARTzttknPPmWt6byRkhC90c5B8-42JdL3QX6IjPkBZ_W8zY9r3LlFfGFPCaNfJ6cFi1RrU8giBqI08pzAl2tMXg_I8vEndSnkRdQZ4rIMgpgPd-HLcudgSsVAEiQFKcmhrUlQcduUB38FNcBDvrmiH4lkuRv8Xfqp9Lyj6PAEQU32bWMkx7JZuz7CsdX7GeiMyqPPs2hrw1u-UN2pZvaD3tuhJT2lU4umviwUoQQ3m77hEuS7JcG6-AEClxK23CkhIK_mcwSkAeodeGxXXpkFpxuJrQaRDe1aZrpXfC9H4lTk8x8qsAMAh3tCVzUQfCF5S8ARbqz8efpHAsP35PQK31NTPEnGhlKmLRlE6RUKEe_CSA0ol3FehMp8ul5YkO4eU4USnWszWXGEOjUQAi-LQURlptnO1kCCj3TRKDnZPhzRLUnGG_KnsNxeB-_5Y3ENJP27b1KkJ7vz5dtB9ZQlvaZMBPd91JhABEGdFzQJCzsLj-t9hbaUJwdlD8kB6gg8LwlY5-SAFdq9SmikF1Q6pb7cIzAZE-3O5udtQNyYkyJk4e0kQHdetsQvlVmGNbkh3rmVcAHIUJmmHMC1k0miNo_-tyKa5SAanCWdF8RVmqL8HcNBkJAdJE2_E-R8wBKLFz_5QPbCsWtRzBxNB-AiTfUZBdhX=w632-h667-s-no?authuser=0"
            alt="Charmaine"
            className="pt-8 pb-12 "
          />
        </div>

        <div className="pl-64">
          <br />
          <strong>
            <p className="pb-3">Skills</p>
          </strong>
          <p className="flex gap-4 pb-3 text-2xl">
            <FaJava className="text-2xl" /> Java
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <SiCplusplus className="text-2xl" /> C/C++
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <FaPython className="text-2xl" /> Python
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <SiJavascript className="text-2xl" /> JavaScript
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <FaReact className="text-2xl" /> React
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <FaHtml5 className="text-2xl" /> HTML
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <FaCss3 className="text-2xl" /> CSS
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <SiTailwindcss className="text-2xl" /> TailwindCSS
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <SiOcaml className="text-2xl" /> Ocaml
          </p>
          <p className="flex gap-4 pb-3 text-2xl">
            <FaBootstrap className="text-2xl" /> Bootstrap
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default About;
