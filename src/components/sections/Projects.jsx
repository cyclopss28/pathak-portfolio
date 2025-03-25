import { RevealOnScroll } from "../RevealOnScroll";
import FadeIn from 'react-fade-in';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
             hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
              <h3 className="text-xl font-bold mb-2 text-center"> Human Face Detection Attendance System using OpenCV </h3>
              <p className="text-gray-400 mb-4 text-center">
              Developed a Python-based attendance system utilizing OpenCV and
              Haar cascades for real-time human face detection, enhancing
              accuracy and automation in attendance tracking through advanced
              computer vision techniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {["Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <a
                  href="https://github.com/cyclopss28/-Human-Face-Detection-Attendance-System"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition 
            "
            >
              <h3 className="text-xl font-bold mb-2 text-center">Shortest Path Finding using Dijkstra's Algorithm</h3>
              <p className="text-gray-400 mb-4 text-center">
              Developed an interactive web application using HTML and
              JavaScript to implement Dijkstra's Algorithm for shortest path
              finding in graphs, showcasing algorithmic efficiency and front-end
              development skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {["Javascript","HTML","CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://github.com/cyclopss28/Shortest-Path-Finding-using-Dijktra-s-Algorithm"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
           
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all flex flex-col items-center justify-center md:col-span-2"
            >
              <h3 className="text-xl font-bold mb-2 text-center">Portfolio Website</h3>
              <p className="text-gray-400 mb-4 text-center">
              Developed a dynamic portfolio website using MERN Stack
              showcasing experience and skills through an interactive and user
              friendly interface, demonstrating proficiency in web development
              and back-end integration.
              </p>
              <div className=" flex flex-wrap gap-2 mb-4 justify-center ">
                {["React", "Javascript", "TailwindCSS", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </RevealOnScroll>
    </section >
  );
};
