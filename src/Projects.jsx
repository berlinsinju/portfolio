import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import talenthub from "./assets/talenthub.png";
import cookWithLove from "./assets/cookwithlove.png";
import kanbanBoard from "./assets/kanbanboard.png";
import marketOfIndia from "./assets/marketofindia.png";
import vishranthi from "./assets/vishranthi.png";
import cedilla from "./assets/cedilla.png";

function Projects() {
  const projects = [
    {
      title: "Freelance Marketplace",
      category: "Full-Stack Web Application",
      image: talenthub,
      description:
        "A full-stack freelance marketplace built with the MERN stack that connects clients with freelancers. Features include role-based dashboards, service listings, secure authentication, OAuth login, Stripe payments, file uploads, and RESTful APIs.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Passport.js",
        "Stripe",
        "Multer",
      ],
      liveUrl: "https://talenthub-freelance-marketplace.netlify.app/",
      githubUrl:
        "https://github.com/berlinsinju/freelance-marketplace-frontend.git",
      number: "01",
    },
    {
      title: "Cook with Love",
      category: "React Application",
      image: cookWithLove,
      description:
        "A recipe application that lets users search and discover meals from around the world. It uses TheMealDB API to display ingredients, measurements, and step-by-step cooking instructions.",
      technologies: [
        "React",
        "JavaScript",
        "React Router",
        "Axios",
        "Tailwind CSS",
      ],
      liveUrl: "https://subtle-semolina-f293ba.netlify.app/",
      githubUrl:
        "https://github.com/berlinsinju/Recipe-App---cook-with-love.git",
      number: "02",
    },

    {
      title: "Kanban Board",
      category: "React Application",
      image: kanbanBoard,
      description:
        "A responsive Kanban Board for managing tasks across To Do, In Progress, and Completed stages with task creation, updates, deletion, and drag-and-drop functionality.",
      technologies: [
        "React",
        "JavaScript",
        "Context API",
        "Tailwind CSS",
        "@dnd-kit",
      ],
      liveUrl: "https://kanban-board-modern.netlify.app/",
      githubUrl: "https://github.com/berlinsinju/Kanban-Board.git",
      number: "03",
    },

    {
      title: "Market of India",
      category: "E-Commerce Website",
      image: marketOfIndia,
      description:
        "A responsive wholesale and retail market website showcasing a wide range of products through visually engaging layouts, smooth image transitions, and an improved user experience.",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap 4",
        "JavaScript",
        "jQuery",
        "Owl Carousel",
      ],
      liveUrl: "https://marketofindia.co.in/",
      githubUrl: "#",
      number: "04",
    },

    {
      title: "Cedilla Interactive Singapore",
      category: "Corporate Website",
      image: cedilla,
      description:
        "A responsive corporate website focused on communicating company services and technologies through a visually appealing and interactive interface across desktop, tablet, and mobile devices.",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "JavaScript",
        "jQuery",
        "CodeIgniter 4",
      ],
      liveUrl: "https://www.cedilla.com.sg/",
      githubUrl: "#",
      number: "05",
    },

    {
      title: "Visharanthi Homes",
      category: "Real Estate Website",
      image: vishranthi,
      description:
        "A responsive real estate website developed to showcase properties and provide users with a seamless and visually appealing experience.",
      technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "jQuery"],
      liveUrl: "https://vishranthihomes.com/ ",
      githubUrl: "#",
      number: "06",
    },
  ];

  return (
    <section id="projects" className="bg-[#fcf7f0] px-6 sm:px-10 py-10 sm:py-8">
      <div className="max-w-7xl mx-auto">
        {/* ================= SECTION HEADER ================= */}

        <div className="mb-14">
          <a
            href="#work"
            className="inline-block mt-10 bg-black text-white font-extrabold tracking-wide text-sm px-6 py-4 hover:bg-neutral-800 transition-colors"
          >
            FEATURED WORK
          </a>
        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className=" group
  flex
  flex-col
  bg-white
  border
  border-gray-200
  transition-all
  duration-500
  hover:-translate-y-1
  hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              {/* ================= PROJECT TOP ================= */}

              <div className=" bg-[#F1EFE9] ">
                {/* Decorative Project Title */}
                <div className="">
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" w-full
  max-h-full
"
                  />
                </div>

                {/* Decorative shape */}
                <div
                  className="absolute
    -right-8
    -bottom-8
    h-28
    w-28
    rounded-full
    bg-purple-500/[0.06]
    transition-transform
    duration-700
    group-hover:scale-110"
                />
              </div>

              {/* ================= PROJECT CONTENT ================= */}

              <div className="flex flex-col flex-1 p-6">
                {/* Category */}
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-500">
                  {project.title}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-2.5 py-1.5 bg-[#F8F7F3] border border-gray-200 text-[11px] font-semibold text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ================= LINKS ================= */}

                <div className="mt-auto pt-7 flex items-center gap-3">
                  {/* Live Demo */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 text-xs font-bold tracking-wide hover:bg-purple-500 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-[11px]" />
                    LIVE DEMO
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-gray-900 text-gray-900 px-4 py-3 text-xs font-bold tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-base" />
                    GITHUB
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
