import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React",
        "Javascript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Astro"
    ];

    const backendSkills = [
        "Node.js",
        "Ruby On Rails",
        "MongoDB",
        "PHP",
        "Git",
        "MySQL"
    ];
    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>    
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with a strong interest in web development. I am a self-taught developer with a background in Development. I have experience in building web applications using modern technologies like React, Javascript, and Tailwind CSS. I am always eager to learn new technologies and improve my skills.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl o-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl o-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>B.S. in Development </strong> - INACAP (2009-2014)
                                        </li>   
                                        <li>
                                            Revelant Coursework: Web Development, Data Structures, Algorithms, Pseudocode, POO
                                        </li>
                                        <li>
                                            Certifications: UX/UI Design, Intro to Software Engineering, E-commerce, Intro to Python
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <h4 className="font-semibold"> Frontend Developer at Farmacias Knop (2020 - 2024)</h4>
                                            <p> Development of the company's website using React and Tailwind CSS.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold"> Frontend-UX/UI at Caja Los Andes (2019)</h4>
                                            <p> Handled both back-end and front-end development using JavaScript, HTML, and CSS.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold"> Web Developer at Digitaria (2017 - 2018)</h4>
                                            <p> Developed custom HTML/CSS email templates, ensuring unique and responsive designs.</p>
                                        </div>
                                    </div>
                                </div>
                </div>
               
            </div>
            </RevealOnScroll>    
        </section>
    );
};