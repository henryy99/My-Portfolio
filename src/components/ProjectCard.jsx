import { getLanguageIcon } from "../services/helpers";

function ProjectCard({ item }) {
  return (
    <div className="border-1 border-dark-green w-full flex flex-col items-center gap-5 pt-8  pb-4 shadow-2xl rounded-md hover:bg-dark-green animate-rotate-90 h-full hover:-translate-y-2 transition-all duration-500">
      <img
        src={`${import.meta.env.BASE_URL}` + item.imgPath}
        alt="project image"
        className="w-40 flex-1"
      />
      <h2 className="text-ascent-green font-semibold uppercase tracking-wider">
        {item.projectName}
      </h2>
      <h4 className="uppercase text-gray-500 tracking-wider font-semibold">
        {!item.isDone ? "In process..." : "Done"}
      </h4>

      <p className="w-[90%] tracking-wide">{item.description}</p>
      <div className="text-center">
        <h4 className="uppercase text-gray-500 tracking-wider font-semibold pb-2 mx-auto">
          techs
        </h4>
        <div className="flex gap-5 justify-center">
          {item.techStacks.map((tech, i) => (
            <img
              key={i}
              src={getLanguageIcon(tech)}
              alt="project image"
              className="w-8"
            />
          ))}
        </div>
      </div>
      <button className="slide-out uppercase text-ascent-green">
        View Project
      </button>
    </div>
  );
}

export default ProjectCard;
