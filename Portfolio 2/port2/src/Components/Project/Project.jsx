import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    name: "Personal Portfolio",
    link: "https://your-portfolio-link.com",
    desc: "A sleek portfolio showcasing my skills and achievements.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    name: "Donation Website",
    link: "https://your-donation-website.com",
    desc: "Platform for donations and resource tracking.",
    tech: ["React", "Tailwind", "Stripe"],
  },
  {
    name: "Travel Agency Website",
    link: "https://your-travel-agency.com",
    desc: "Travel booking and destinations showcase.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#1b1e32] text-white px-4 py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-14 text-center">✨ My Projects</h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#262a45] border border-cyan-600/20 hover:border-cyan-400/40 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-800/50 text-cyan-200 px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:scale-105"
            >
              Visit <FaArrowRight />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
