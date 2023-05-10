import Header from "../components/Header";
import Footer from "../components/Footer";
const About = () => (
  <div className="pt-12 border">
    <Header />
    <h1 className="text-2xl decoration-blue-950 font-bold font-mono">
      About Charmaine Mangorima
    </h1>
    <div className=" pt-12 ">
      <div className="">
        <p className=" text-xl">
        Hello and welcome 😃 !
        <br /><br />
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
      <div className=" ">
        <img
          src="https://6ixelement.club/images/about-image.jpg"
          alt=""
          className="pt-8 "
        />
      </div>
    </div>

    <Footer />
  </div>
);

export default About;
