import { works } from "./fileObjects/cards";
import  Expand  from "./Expand";

const Works = () => {
  return (
    <>
          <br /><h2 className="center text-2xl decoration-blue-950 font-bold font-mono">My Portfolio</h2>
    <div className="border border-radius-12 flex flex-wrap justify-between pb-3">
      {works.map((item) => {
        return (
          <div
            key={item.id}
            className="p-10 gap-5 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 border"
          >
            <img className="w-full" src={item.src} alt={item.alt} />
            <div className="flex items-center justify-center mt-2">
              <a
                href={item.link}
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noreferrer"
              >
                {item.nom}
              </a>
            </div>
          </div>
        );
      })}
    </div>
    <Expand/>
    </>
  );
};

export default Works;
