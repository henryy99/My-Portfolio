import ContentFrame from "./ContentFrame";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="pt-20">
      <ContentFrame frameName="Projects">
        <div className="grid gap-10 justify-center items-center w-[80%]  mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard imgPath="/Poke.svg" projectName="PokeGuess" />
          <ProjectCard
            imgPath="/weather.svg"
            projectName="Search the Weather"
          />
          <ProjectCard imgPath="/recipe.png" projectName="Find the Recipe" />
          <ProjectCard
            imgPath="/Pokedex.png"
            projectName="Pokedex Clones"
            inProcess={true}
          />
        </div>
      </ContentFrame>
    </div>
  );
}

export default Projects;
