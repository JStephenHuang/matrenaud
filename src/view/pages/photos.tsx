const Photo = () => {
  return <div className="aspect-video bg-black"></div>;
};

const Photos = () => {
  const photos = [];
  for (let i = 0; i < 9; i++) {
    photos.push(<Photo></Photo>);
  }
  return <div className="w-full grid grid-cols-4 gap-3">{photos}</div>;
};

export default Photos;
