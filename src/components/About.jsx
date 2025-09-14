import { DiJavascript } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import TechnologyCard from "./TechnologyCard";
import ContentFrame from "./ContentFrame";

const technologyStack = [
  {
    imgPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    techName: "Javascript",
  },

  {
    imgPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    techName: "Typescript",
  },
  {
    imgPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    techName: "Swift",
  },
  {
    imgPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    techName: "Git",
  },
  {
    imgPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    techName: "React",
  },
  {
    imgPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    techName: "Next.js",
  },
  {
    imgPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    techName: "Tailwindcss",
  },
  {
    imgPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    techName: "PostgreSQL",
  },
];

function About() {
  return (
    <div id="about" className="animate-slide-bottom-top pt-20">
      <div className="flex flex-col gap-20">
        <ContentFrame frameName="About">
          <p className="w-[90%] mx-auto text-lg md:text-xl">
            I'm just graduated from FGCU in May, 2025 with Software Engineering
            degree. I'm currently focused on Front-end Development and will be
            learning to become Fullstack Developer. I've developed experience
            with various programming technologies.
            <br />
            <br />
            From building web applications, I can enjoy both creating a new
            thing and exploring new technologies. I'm constantly learning and
            challenging myself with new projects that combine my interests in
            website app development and games development.
          </p>
        </ContentFrame>

        <div className="">
          <ContentFrame frameName="Technologies">
            <ul className="flex gap-4  px-2 flex-wrap justify-around">
              {technologyStack.map((item, i) => (
                <TechnologyCard item={item} key={i} />
              ))}
            </ul>
          </ContentFrame>
        </div>
      </div>
    </div>
  );
}

export default About;
