function ProjectCard({ imgPath, projectName, description, inProcess = false }) {
  return (
    <div className="border-1 border-dark-green w-full flex flex-col items-center gap-5 pt-8  pb-4 shadow-2xl rounded-md hover:bg-dark-green animate-rotate-90 h-full ">
      <img
        src={imgPath || `/vite.svg`}
        alt="project image"
        className="w-40 flex-1"
      />
      <h2 className="text-ascent-green font-semibold uppercase tracking-wider">
        {projectName}
      </h2>
      <h4 className="uppercase text-gray-500 tracking-wider font-semibold">
        {inProcess ? "In process..." : "Done"}
      </h4>

      <p className="w-[90%] tracking-wide">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, et ipsa
        voluptatem natus itaque repellendus consequuntur, laboriosam distinctio,
        repellat reprehenderit quas dolorum quam! Tempora vitae et, incidunt
        magnam atque ipsam!
      </p>
      <button className="slide-out uppercase text-ascent-green">
        View Project
      </button>
    </div>
  );
}

export default ProjectCard;
