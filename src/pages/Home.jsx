import { RevealOnScroll } from "../components/OnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative`}
    >
      <RevealOnScroll>
        <div className={`text-center z-10 px-4`}>
          <h1
            className={`text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right`}
          >
            Hi, i am Mehedi Hasan
          </h1>
          <p className="text-blue-200 text-lg mb-8 max-w-lg mx-auto">
            A passionate web developer from Bangladesh. I love to build web
            applications with modern web technologies.
          </p>
          <div className={`flex justify-center space-x-4`}>
            <a
              href="#projects"
              className={`bg-blue-500 text-white py-3 px-6 rounded-4xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]`}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`border border-blue-500/50 text-blue-500 py-3 px-6 rounded-4xl font-medium transition-all duration-200
                hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]
                hover:bg-blue-500/10`}
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
