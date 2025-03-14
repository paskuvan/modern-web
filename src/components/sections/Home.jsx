import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>    
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Majo Paskuvan
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a frontend developer based in Santiago, Chile, with a passion for creating beautiful and functional websites, applications, and everything in between, always looking to learn and improve my skills.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500 hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};