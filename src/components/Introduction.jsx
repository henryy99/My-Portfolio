import { IoLogoGithub } from "react-icons/io";

function Introduction() {
  return (
    <div
      className="flex justify-center items-center flex-col h-screen gap-5 animate-rotate-90"
      id="home"
    >
      <h1 className="text-3xl font-bold md:text-4xl">
        Hi, I'm <span className="text-ascent-green">Henry Nguyen</span>
      </h1>
      <h4 className="text-ascent-green md:text-lg">Graduated at FGCU, 2025</h4>
      <p className=" tracking-wide md:text-xl">
        Software Engineering Degree & Website Developer
      </p>

      <a
        href="https://github.com/henryy99"
        target="_blank"
        className="animate-rolling"
      >
        <IoLogoGithub
          className="hover:text-ascent-green animate-bounce duration-300 transition-all cursor-pointer "
          size={40}
        />
      </a>

      <button className="project-button border-ascent-green border-1 rounded-sm uppercase tracking-wider px-3 py-2 font-semibold cursor-pointer md:px-6 animate-slide-bottom-top ">
        <a href="#projects">My Projects</a>
      </button>
    </div>
  );
}

export default Introduction;
