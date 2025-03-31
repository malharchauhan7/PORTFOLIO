import React from "react";
import { motion } from "framer-motion";
import ThemeController from "../components/ThemeController";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen px-4 py-10"
    >
      <article className="w-[88%] lg:w-[35%] md:w-[50%] sm:w-[50%] mx-auto">
        {/* Header */}
        <header className="space-y-4 mb-12 text-center">
          <h1 className="text-3xl font-medium">Your Name</h1>
          <p className="text-gray-600">Software Developer</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a
              href="mailto:your.email@example.com"
              className="hover:text-gray-900 transition-colors"
            >
              your.email@example.com
            </a>
            <span>•</span>
            <a
              href="https://github.com/yourusername"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/yourusername"
              className="hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <p className="text-gray-600 leading-relaxed">
            Experienced software developer with expertise in building scalable
            web applications. Passionate about clean code, user experience, and
            emerging technologies.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Senior Developer</h3>
                <span className="text-sm text-gray-500">2020 - Present</span>
              </div>
              <p className="text-gray-500 text-sm mb-2">Company Name</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Led development of key features for flagship product</li>
                <li>• Mentored junior developers and conducted code reviews</li>
                <li>
                  • Implemented CI/CD pipelines reducing deployment time by 40%
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Python",
              "Git",
              "AWS",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6">Education</h2>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">
                Bachelor of Science in Computer Science
              </h3>
              <span className="text-sm text-gray-500">2016 - 2020</span>
            </div>
            <p className="text-gray-500 text-sm mb-2">University Name</p>
            <p className="text-sm text-gray-600">
              Relevant coursework: Data Structures, Algorithms, Web Development,
              Database Management
            </p>
          </div>
        </section>
      </article>
      <ThemeController />
    </motion.div>
  );
};

export default Resume;
