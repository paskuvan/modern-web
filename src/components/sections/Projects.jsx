import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Cloud Platform",
            description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
            technologies: ["React", "Node.js", "AWS", "Docker"],
            link: "#"
        },
        
    ];

    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"> 
            
            <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Modern Movie</h3>
              <p className="text-gray-400 mb-4">
                I build an app and react, JSX, hooks and components, build a real, it's a personal project.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Vite", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://paskuvan.github.io/movie/"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Redesign UX Amazon</h3>
              <p className="text-gray-400 mb-4">
                Redesign of the Amazon website with a focus on improving the
                user experience and interface design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Figma", "Research UX", "Illustrator", "Maze"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.behance.net/gallery/124504425/Rediseno-UXUI-Amazon"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Vinos Chilenos de Lujo</h3>
              <p className="text-gray-400 mb-4">
                A e-commerce website for a luxury wine brand, featuring a custom design and integration with WooCommerce.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Wordpress", "PHP", "Woocommerce", "SEO"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.behance.net/gallery/124504425/Rediseno-UXUI-Amazon"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">90th Anniversary Farmacias Knop</h3>
              <p className="text-gray-400 mb-4">
                A landing page for the 90th anniversary of Farmacias Knop, a Chilean pharmacy chain.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Javascript", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://paskuvan.github.io/landing-90/"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Simple Chat</h3>
              <p className="text-gray-400 mb-4">
                I make a chat with CSS such as Bootstrap, and JavaScript, it's a personal project.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CSS", "Bootstrap", "Javascript", "Git"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://paskuvan.github.io/chatbot/"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">A collection of logos</h3>
              <p className="text-gray-400 mb-4">
                I also make logos, I have a collection of logos that I have made for different companies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Illustrator", "Photoshop", "Creative", "Design"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.behance.net/gallery/41828285/Logo-Collection-2016"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      
            </RevealOnScroll>
        </section>
    );
};