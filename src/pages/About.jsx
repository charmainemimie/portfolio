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
  <div className="pt-12 border">
    <Header />
    <h1 className="text-2xl decoration-blue-950 font-bold font-mono">
      <marquee> About Charmaine Mangorima</marquee>
    </h1>
    <div className=" pt-4">
      <div className="">
        <p className=" text-xl">
          Hello and welcome 😃 !
          <br />
          <br />
          My name is Charmaine, and I am a Graduate Software Engineer. I am
          passionate about technology and its ability to make a positive impact
          on society. I have a Bachelor of Science degree in Information Systems
          and Software Engineering from University of Boumerdes ,Algeria and I
          am about to graduate with a Master of Science degree in Software
          Engineering and Information Processing from the same university.
          <br />
          <br />
          I am excited to begin my career in the field. During my studies, I
          gained experience in various programming languages such as Java,
          Python, and JavaScript, and I have worked on projects ranging from
          simple console applications to full-stack web development. I also have
          knowledge in network and computer security. I am a quick learner, an
          analytical thinker, and a problem-solver. I enjoy working
          collaboratively with others to solve complex problems, and I am always
          looking for new challenges to expand my skill set. In my free time, I
          enjoy tinkering with personal programming projects and staying
          up-to-date with the latest industry trends.
          <br />
          <br />
          Thank you for taking the time to learn more about me. Please feel free
          to explore my portfolio to learn more about my experience and skills.
          If you have any questions or would like to connect, please don&apos;t
          hesitate to reach out!
        </p>
      </div>

      <div className="flex flex-wrap gap-5 border mt-4">
        <div className=" ">
          <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaV3jxu_MW3d81c8xDCEJXaSoh0vUwNA0XmpgGlmNv8ms0ui4RCF8pcN8ji1pumCCZnepIG7GNLcsnimkxII5FEV-AonhgzQUEQVSRag60zQIxmLRRtjpPo2cWzg2GcdNmYp5Arwom7sq9kS0ZWr12Qb-FV4_Vao_K3SULa_XKODSL1Aw_qgKunWuom1Z7zYyW8VgEeKSyNXz_F6p9WMBxIIjhodOgY6kixnh4YxDRZwEXLogbfeTZyQBmurHRvTRT1JR2YsN4ucfi9gdmwOElRY3Sqq5ZhUhXrleyHmBQ9Eug1z3brpeWvmR2KJWpzY2KmE0lH1itJqWcbpcVadalyGWiaemoI0r7vw9oGxZT9nfQD-EZ_6bQTMtc-bMIJDbg7uX1xdi5O4fgp06zIUIxqBaaFuIRqgF09FVYVfV0HnPjZ62SkOr_oykzsQXWvrSpuq5b0QcTE1HKd-VAUoZhsOMo_V1k5RBrGaTLkrYXjYggt0m_VXrbL2U5gUyApnKoEgHhwd23JtY14EUr1DYZxRX4ArbcR2YzFndaixBOIsNyUGn0nbxraQbrCmX5ZMlYjytNtGo_mLUgrFYMPajUiQkafMObEL6xaBHtR6WSkcxm3xtkhL30PTm-HEf38P8IpAye8QQSBBiFTI1sP36u4Q4wxCul4akf0afbiBFsp7MkX-GB1httro7SLbXph_Q56kr9oeyyAaXjHI0RCgLQ5BAfYr-v86y38354d7SZVN_ceiBkOooZ7svt34Mo8Xt5Itgr-hv0xqfpcfYo45VqJ8shp7igixipIkqgoJ7bVlslbB6FeGBkHpUs0kZ-1-DPtVfElkHhX_Dar8L4cERFyFMERiJPkRKg07HvXUOgTMzo0rKTXcAMQkuZZ0nWhIFy7Oz7MK_0SrzqWLdCHnEA7vYSmBInux3jHfRdzzKqgiP7tM-Jbz3S_Ubsbu-nqd=w500-h667-s-no?authuser=0"
            alt="Charmaine"
            className="pt-8 pb-12"
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
