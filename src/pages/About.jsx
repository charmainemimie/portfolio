import { Progress } from "flowbite-react";
import Footer from '../components/Footer'
const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-8 pt-10 pb-8 gap-8">
        <div className="">
          <h1 className="pb-4 text-2xl font-bold">Skills</h1>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium dark:text-white">HTML</div>
            <Progress progress={99} size="xl" color="dark" />
            <div className="text-lg font-medium dark:text-white">ReactJs</div>
            <Progress progress={85} size="xl" color="dark" />

            <div className="text-lg font-medium dark:text-white">Python</div>
            <Progress progress={70} size="xl" color="dark" />

            <div className="text-lg font-medium dark:text-white">
              JavaScript
            </div>
            <Progress progress={85} size="xl" color="dark" />

            <div className="text-lg font-medium dark:text-white">Java</div>
            <Progress progress={65} size="xl" color="dark" />

            <div className="text-lg font-medium dark:text-white">MySQL</div>
            <Progress progress={85} size="xl" color="dark" />

            <div className="text-lg font-medium dark:text-white">
              TailwindCSS
            </div>
            <Progress progress={85} size="xl" color="dark" />
            <div className="text-lg font-medium dark:text-white">C/C++</div>
            <Progress progress={60} size="xl" color="dark" />

            <div className="text-lg font-medium dark:text-white">Node</div>
            <Progress progress={50} size="xl" color="dark" />

            <div className="text-lg font-medium dark:text-white">
              Express.js
            </div>
            <Progress progress={50} size="xl" color="dark" />
          </div>
</div>
          <div>
            <div className="about-me pt-4 pt-md-0">
              <div className="title-box-2">
              <h1 className="pb-4 text-2xl font-bold">About me</h1>
              </div>
              <p className="lead">
                Hello and welcome 😃 !<br />
                <br />
                My name is Charmaine, and I am a Graduate Software Engineer. I am
                passionate about technology and its ability to make a positive
                impact on society. I have a Bachelor&apos;s degree in
                Information Systems and Software Engineering from University of
                Boumerdes ,Algeria and I am about to graduate with a
                Master&apos;s degree in Software Engineering and Information
                Processing from the same university.
              </p>     <br />     <br />
              <p className="lead">
                I am excited to begin my career in the field. During my studies,
                I gained experience in various programming languages such as
                Java, Python, and JavaScript, and I have worked on projects
                ranging from simple console applications to full-stack web
                development. I also have knowledge in network and computer
                security. I am a quick learner, an analytical thinker, and a
                problem-solver. I enjoy working collaboratively with others to
                solve complex problems, and I am always looking for new
                challenges to expand my skill set. In my free time, I enjoy
                tinkering with personal programming projects and staying
                up-to-date with the latest industry trends.
              </p> <br />     <br />
              <p className="lead">
                Thank you for taking the time to learn more about me. Please
                feel free to explore my portfolio to learn more about my
                experience and skills. If you have any questions or would like
                to connect, please don&apos;t hesitate to reach out!
              </p>
            </div>
          </div>
        </div>

        <Footer/>
      </div>

  );
};

export default About;
