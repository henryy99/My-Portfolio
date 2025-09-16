import ContentFrame from "./ContentFrame";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgPath: "/Poke.svg",
    projectName: "PokeGuess",
    techStacks: ["javascript", "react", "tailwindcss"],
    description:
      " A Wordle-inspired game where you guess the Pokemon'name. You will get a limited attempts to guess the name correctly and a hint whenever you guess the wrong name. Like wordle, it also shows the corrected and wrong letter after each guess. The game use PokemonAPI for Pokemon data.",
    isDone: true,
  },
  {
    imgPath: "/weather.svg",
    projectName: "Search the Weather",
    techStacks: ["javascript", "react", "tailwindcss"],
    description:
      "A simple website for weather look up. You can search a city to get current weather data such as temperature and humidity. This website also implemented responsive designs. The web use Openweather API for current weather data.",
    isDone: true,
  },
  {
    imgPath: "/recipe.png",
    projectName: "Find the Recipe",
    techStacks: ["javascript", "react", "tailwindcss"],
    description:
      "A recipe search responsive website where you can search for recipe of thousands dishes by ingredients or keyword with image and instructions. This website use ForkifyApi for recipe data.",
    isDone: true,
  },
  {
    imgPath: "/Pokedex.png",
    projectName: "Pokedex Clones",
    techStacks: ["javascript", "react", "tailwindcss"],
    description:
      "Pokédex App is an interactive encyclopedia for all things Pokémon. It allows you to search and explore Pokémon by name or ID, view their stats, abilities, types, and images, and learn more about their characteristics. ",
    isDone: false,
  },
];

function Projects() {
  return (
    <div id="projects" className="pt-20">
      <ContentFrame frameName="Projects">
        <div className="grid gap-10 justify-center items-center w-[80%]  mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((item, i) => (
            <ProjectCard item={item} key={i} />
          ))}
        </div>
      </ContentFrame>
    </div>
  );
}

export default Projects;
