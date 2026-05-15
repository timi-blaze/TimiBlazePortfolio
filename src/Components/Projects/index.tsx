import './Projects.css'
import Resturant from '../../assets/restaurant1.jpg';
import Todo from '../../assets/todo.jpg'
import Solar from '../../assets/solar.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";





interface Project {
    id: string;
    title: string;
    desc: string;
    image: string;
    tech: string[];
    github: string;
    live: string;
}

const projects: Project[] = [
{
    id: "tantalizer",
    title: "Tantalizer Website",
    desc: "The restaurant website helps to build the brand. It lets people find you online. People look online for contact details such as phone number, address, and opening times. Let your clients book their tables online today!",
    image: Resturant,
    tech: ["React.js", "Typescript","Css"],
    github: "#",
    live:"https://tantalizer.vercel.app/"
},
{
    id: "todo-app",
    title: "Blaze Energy",
    desc: "A solar website with multiple pages and onboarding platform for employees ",
    image: Solar,
    tech: ["React", "Typescript"],
    github: "#",
    live:"https://blaze-energy.vercel.app/"
},

{
    id: "todo-app",
    title: "Todo App",
    desc: "Task manager with API integration",
    image: Todo,
    tech: ["React", "Typescript"],
    github: "#",
    live:"#"
},
];


const Projects:React.FC = () => {
  return (
  <section id="projects" className="projects fade-in">
    <h2>My Projects</h2>

    <div className="projects-grid">
        {projects.map((project) => (
            <div className="project-card" key={project.id}>
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="overlay">
                    <a href={project.live} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

             <div className="tags">
                {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                ))}
             </div>
             </div>
            </div>
        ))}
    </div>



  </section>
  )
}

export default Projects