import Navbar from "../components/navbar";

const Photo = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <header className="h-[10%]"></header>
      <div className="w-full h-[90%] flex items-center">
        <div className="w-1/2 h-full bg-white"></div>
        <div className="w-1/2 mx-10 flex flex-col">
          <p className="text-[24px] bold">Titre</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus expedita ratione a laboriosam aspernatur, voluptas ad
            recusandae eveniet ipsa doloribus, debitis inventore animi
            laudantium nam nulla aliquam quidem voluptatem adipisci?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
