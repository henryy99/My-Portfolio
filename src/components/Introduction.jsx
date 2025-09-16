import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Introduction() {
  return (
    <div
      className="flex justify-center items-center flex-col h-screen gap-5 animate-rotate-90"
      id="home"
    >
      <h1 className="text-3xl font-bold md:text-5xl">
        Hi, I'm <span className="text-ascent-green">Henry Nguyen</span>
      </h1>
      <h4 className="text-ascent-green md:text-lg">Graduated at FGCU, 2025</h4>
      <p className=" tracking-wide md:text-xl animate-slide-bottom-top">
        Software Engineering Degree & Website Developer
      </p>

      <div className="flex gap-5 animate-slide-bottom-top">
        <a href="https://github.com/henryy99" target="_blank">
          <IoLogoGithub
            className="hover:text-ascent-green duration-300 transition-all cursor-pointer "
            size={40}
          />
        </a>
        <a href="https://www.linkedin.com/in/henryy99/" target="_blank">
          <IoLogoLinkedin
            className="hover:text-ascent-green  duration-300 transition-all cursor-pointer "
            size={40}
          />
        </a>
      </div>

      <div className="flex gap-5">
        <button className="project-button border-ascent-green border-1 rounded-sm uppercase tracking-wider px-3 py-2 font-semibold cursor-pointer md:px-6 animate-slide-left-right ">
          <a href="#projects">My Projects</a>
        </button>
        <button className="resume-button border-ascent-green border-1 rounded-sm uppercase tracking-wider px-3 py-2 font-semibold cursor-pointer md:px-6 animate-slide-right-left bg-ascent-green text-primary-dark">
          <a
            href="https://www.linkedin.com/in/henryy99/details/featured/1757886570840/single-media-viewer/?profileId=ACoAAFpIeNMBylCkCXOBYKceLuzub5Q8xS09xkE"
            target="_blank"
          >
            My Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Introduction;
