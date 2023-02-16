const About = () => {
  return (
    <div className="w-full flex flex-col">
      <section className="flex">
        <div className="w-[60%] aspect-square border"></div>
        <div className="w-1/5 flex flex-col justify-between ml-2">
          <div className="aspect-square border mb-2"></div>
          <div className="aspect-square border"></div>
          <div className="aspect-square border mt-2"></div>
        </div>
        <div className="w-1/5 flex flex-col ml-2">
          <p className="bold mb-2">Qui suis-je?</p>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            aliquid facilis facere temporibus nihil laudantium est sit
            repellendus unde labore eos incidunt ad provident, aperiam veniam ab
            voluptatum porro fugit.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

// , but it also says a lot about you, even if you have an insane skill, or insane looks, can you use those traits to monetize yourself?, can you sell yourself? if there was a group of investors with millions ready to invest, can you make the pitch to get them bags.
