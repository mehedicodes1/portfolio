import "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Frontend, Backend, other, devops } from "../components/Skills";
import { RevealOnScroll } from "../components/OnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center py-20`}
    >
      <RevealOnScroll>
        <div className={`max-w-3xl mx-auto px-4 `}>
          {/* Section title */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About me description */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>

                <div className="flex flex-wrap gap-2">
                  {Frontend.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>

                <div className="flex flex-wrap gap-2">
                  {Backend.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Others skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Others</h3>

                <div className="flex flex-wrap gap-2">
                  {other.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* DevOps skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> DevOps</h3>

                <div className="flex flex-wrap gap-2">
                  {devops.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-b-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  style={{ color: "#3a88fe" }}
                />{" "}
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Diploma In Computer Science And Engineering </strong>{" "}
                  - Munshigonj Polytechnic Institute (2020-2024)
                </li>
                <li>
                  <strong>
                    Secondary School Certificate (SSC), Electrical Technology{" "}
                  </strong>{" "}
                  - Munshiganj Technical School And College (2018-2020)
                </li>
                <li>
                  Relevant Coursework: The Complete 2024 Web Development
                  Bootcamp{" "}
                  <a
                    className="text-blue-500"
                    href="https://www.udemy.com/certificate/UC-0e923279-689c-4020-be98-edc54e4822eb/"
                  >
                    Open ⇗
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-b-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ color: "#3a88fe" }}
                />{" "}
                Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at Sondhan INC. (2022){" "}
                  </h4>
                  <p>
                    Developed and maintained web applications using React,
                    Node.js, and MongoDB. Collaborated with cross-functional
                    teams to define, design, and ship new features.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Full-Stack Developer at Soker .COM (2019){" "}
                  </h4>
                  <p>
                    Managed website and app development projects, ensuring
                    timely delivery and high-quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
