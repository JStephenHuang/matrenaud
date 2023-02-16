import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./view/components/navbar";
import Home from "./view/pages/home";
import About from "./view/pages/about";
import Media from "./view/pages/media";
import Photos from "./view/pages/photos";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center mx-40">
      <Navbar />
      <header className="my-[5%]"></header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/media" element={<Media />}></Route>
      </Routes>
    </div>
  );
};

export default App;
