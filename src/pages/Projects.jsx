import React from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import ThemeController from "../components/ThemeController";
import { projects } from "../data/projects";
const Projects = () => {
  //   const projects = [
  //     {
  //       title: "Portfolio Website",
  //       description: "A minimal portfolio built with React and Tailwind CSS",
  //       timeline: "March 2024",
  //       status: "Completed",
  //       tech: ["React", "Tailwind", "Framer Motion"],
  //       image: "/projects/portfolio.png",
  //       demo: "https://your-portfolio.com",
  //       github: "https://github.com/yourusername/portfolio",
  //     },
  //     // Add more projects here
  //   ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen px-4 py-10"
    >
      <Logo />
      <div className="font-bold text-2xl my-4 flex gap-2">
        <h1>Projects</h1>
        <ThemeController />
      </div>

      <div className="space-y-6 w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className="rounded-lg transition-all duration-200 group relative"
          >
            <div className="rounded-lg p-4 relative transition-all duration-200 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <div className="space-y-3 relative z-10">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )}

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{project.timeline}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {project.status}
                  </span>
                </div>

                <h2 className="text-lg font-medium transition-colors">
                  {project.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm relative z-20">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <span>GitHub</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
