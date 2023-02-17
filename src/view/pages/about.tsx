import Navbar from "../components/navbar";

const About = () => {
  return (
    <div className="w-screen h-screen bg-no-repeat bg-left bg-cover bg-[url('https://www.studyrama.com/sites/default/files/metier/2022-07/arton765.png')]">
      <div className="w-full h-full absolute flex items-end">
        <div className="w-full h-1/4 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      <Navbar />
      <header className="h-[10%]"></header>
      <section className="h-[90%] flex flex-col items-center justify-end">
        <p className="bold text-[30px] text-white mb-3">
          Voila ma carriere, Matrnaud.
        </p>
        <a
          href="#quote"
          className="text-[12px] rounded-full bg-white text-black px-4 py-2 mb-40 z-10 hover:translate-y-2 transition-all"
        >
          Decouvrir
        </a>
      </section>
      <section id="quote" className="w-full h-[90%] grid place-items-center">
        <div className="w-1/2">
          <p className="text-center text-[24px]">
            "Ne pas faire attention au matériel photo. Prendre son téléphone ou
            acheter un appareil bon marché et l’avoir toujours avec soi." -
            Matias
          </p>
        </div>
      </section>
      <section className="w-full h-full flex flex-col items-center">
        <div className="w-4/5 h-full flex justify-between">
          <div className="h-1/3 aspect-video bg-white"></div>
          <div className="h-2/3 w-1/3 mt-20 bg-white"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
