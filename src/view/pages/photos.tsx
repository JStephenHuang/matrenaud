import Navbar from "../components/navbar";

const Photo = () => {
  return <div className="aspect-video bg-white"></div>;
};

const Photos = () => {
  const photos = [];
  for (let i = 0; i < 9; i++) {
    photos.push(<Photo></Photo>);
  }
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <header className="h-[10%]"></header>
      <div className="w-full grid grid-cols-4 gap-3">{photos}</div>;
    </div>
  );
};

export default Photos;
